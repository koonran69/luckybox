<?php

namespace Domains\Web\Http\Controllers\Home;

use Domains\Core\Enums\DefaultActive;
use Domains\Core\Enums\Gender;
use Domains\Core\Http\Requests\Request;
use Domains\User\Models\User;
use Domains\Web\Enums\RewardCategory;
use Domains\Web\Http\Controllers\Controller;
use Domains\Web\Http\Requests\SubmitParticipationRequest;
use Domains\Web\Models\Reward;
use Domains\Web\Models\RewardHistory;
use Domains\Web\Models\SpinTicket;
use Domains\Web\Services\RewardService;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        public User          $userModel,
        public RewardHistory $rewardHistoryModel,
        public SpinTicket    $spinTicketModel,
        public Reward        $rewardModel,

        public RewardService $rewardService,
    )
    {

    }

    public function submitOpenBox(Request $request)
    {
        $data = $request->validate([
            'box_position' => ['required', 'integer', 'between:1,9'],
        ], [
            'box_position.required' => trans('Vui lòng chọn thẻ muốn mở'),
            'box_position.integer' => trans('Vui lòng chọn thẻ muốn mở'),
            'box_position.between' => trans('Vui lòng chọn thẻ muốn mở'),
        ]);

        $phone = session('lucky_user_phone');
        if (!$phone) {
            // chưa submit form về lại trang form submit
            return to_route('home');
        }
        $user = $this->userModel
            ->where('phone', $phone)
            ->first();

        if (!$user) {
            //user không tồn tại, xoá session phone này đi và trở về trang submit form
            session()->forget('lucky_user_phone');
            return to_route('home');
        }

        // Đã mở box chưa?
        $openedReward = $this->rewardHistoryModel
            ->with('reward')
            ->where('user_id', $user->id)
            ->first();
        if ($openedReward) {
            return back()->withErrors(['msg_error' => trans('Bạn đã tham gia và mở thưởng rồi!')]);
        }

        // Còn lượt mở không?
        $spinTicket = $this->spinTicketModel
            ->where('user_id', $user->id)
            ->where('is_used', false)
            ->first();
        if (!$spinTicket) {
            return back()->withErrors(['msg_error' => trans('Bạn không có lượt mở. Vui lòng điền form đăng ký tham gia')]);
        }

        //Xử lý logic lấy phần thưởng random theo tỉ lệ
        $rewards = $this->rewardModel::where('is_active', DefaultActive::Active)
            ->where(function ($q) {
                $q->where('remaining_quantity', '>', 0)
                    ->orWhere('remaining_quantity', -1);
            })
            ->lockForUpdate()
            ->get();

        if ($rewards->isEmpty()) {
            // fallback tuyệt đối (phòng DB lỗi)
            $reward = $this->rewardModel->where('code', 'LUCKY_MESSAGE')->firstOrFail();
        } else {
            //Kiểm tra phone có thuộc phone đang sét phần thưởng không
            $arrPhoneHartReward = [
//                '0392826477' => 'FIRST_PRIZE_GOLD',
//                '0392826444' => 'THIRD_PRIZE_MIBAND',
            ];
            //Kiểm tra phone có thuộc phone đang sét phần thưởng không
            if (array_key_exists($user->phone, $arrPhoneHartReward)) {
                $reward = $this->rewardModel->where('code', $arrPhoneHartReward[$user->phone])->firstOrFail();
            }else{
                $reward = $this->rewardService->randomRewardByWeight($rewards);
            }
        }

        DB::beginTransaction();
        try {
            // Lưu lịch sử
            $this->rewardHistoryModel::create([
                'user_id' => $user->id,
                'reward_id' => $reward->id,
                'spin_ticket_id' => $spinTicket->id,
                'box_position' => $data['box_position'],
            ]);

            // Trừ số lượng nếu có giới hạn
            if ($reward->remaining_quantity > 0) {
                $reward->decrement('remaining_quantity');
            }

            // Dùng ticket
            $spinTicket->update([
                'is_used' => true,
                'used_at' => now(),
            ]);

            DB::commit();
            return back()->with('msg_success', '')
                ->with(['box_position' => $data['box_position'],
                    'reward' => [
                        'id' => $reward->id,
                        'code' => $reward->code,
                        'name' => $reward->name,
                        'image' => $reward->image,
                        'description' => $reward->description,
                        'display_value' => $reward->display_value,
                    ],]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['msg_error' => trans('Thao tác không đúng!')]);
//            throw $th;
        }
    }

    public function luckyBoxIndex(Request $request)
    {
        $phone = session('lucky_user_phone');
        if (!$phone) {
            // chưa submit form về lại trang form submit
            return to_route('home');
        }

        $user = $this->userModel
            ->where('phone', $phone)
            ->first();

        if (!$user) {
            //user không tồn tại, xoá session phone này đi và trở về trang submit form
            session()->forget('lucky_user_phone');
            return to_route('home');
        }

        // Đã mở box chưa?
        $openedReward = $this->rewardHistoryModel
            ->with('reward')
            ->where('user_id', $user->id)
            ->first();

        // Còn lượt mở không?
        $countSpin = $this->spinTicketModel
            ->where('user_id', $user->id)
            ->where('is_used', false)
            ->get()->count();

        return Inertia::render('home/ClaimBox', [
            'hasOpened' => (bool)$openedReward,
            'openedReward' => $openedReward,
            'canSpin'      => $countSpin > 0,
            'countSpin'    => $countSpin,
        ]);
    }

    public function submitFormParticipation(SubmitParticipationRequest $request)
    {
        $data = $request->validated();

        $exitUser = $this->userModel->where('phone', $data['phone'])->orwhere('email', $data['email'])->first();
        if($exitUser){
            return back()->with([
                'show_notification' => true,
            ]);
        }

        //Tạo thông tin user và cộng một lượt quay nếu user mới (Kiểm tra theo phone)
        $user = $this->userModel->firstOrCreate(
            [
                'phone' => $data['phone'],
            ],
            [
                'email' => $data['email'],
                'fullname' => $data['fullname'],
                'gender' => $data['gender'] ?? null,
                'age' => $data['age'] ?? null,
                'address' => $data['address'] ?? null,
            ]
        );

        //tạo spin_ticket tại đây nếu chưa tạo cho user này
        $hasSpinTicket = $this->spinTicketModel
            ->where('user_id', $user->id)
            ->exists();

        if (!$hasSpinTicket) {
            $this->spinTicketModel->create([
                'user_id' => $user->id,
                'type' => 'register_form',
            ]);
        }
        session([
            'lucky_user_phone' => $user->phone,
        ]);
        return to_route('luckyBoxIndex')->with('msg_success', trans('Bạn đã tham gia chương trình thành công!. Chúc bạn may mắn với thẻ quà tặng đã chọn'));
    }

    public function index()
    {
        $rewards = $this->rewardModel::where(function ($q) {
                $q->where('total_quantity', '>', -1);
            })->get();
        return Inertia::render('home/Index', [
            'rewards' => $rewards,
            'genders' => Gender::asSelectArray(),
        ]);
    }
}