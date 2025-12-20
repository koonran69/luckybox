<?php

namespace Domains\Web\Http\Controllers\Home;

use Domains\Core\Enums\Gender;
use Domains\Core\Http\Requests\Request;
use Domains\User\Models\User;
use Domains\Web\Http\Controllers\Controller;
use Domains\Web\Http\Requests\SubmitParticipationRequest;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        public User $model,
    )
    {

    }

    public function luckyBoxIndex(Request $request)
    {
        //Kiểm tra user này đã mở box chưa, mở rồi thì hiển thị vị trí box mở và phần thưởng

        return Inertia::render('home/ClaimBox', []);
    }

    public function submitFormParticipation(SubmitParticipationRequest $request){
        $data = $request->validated();

        //Tạo thông tin user và cộng một lượt quay nếu user mới (Kiểm tra theo phone)
        $user = $this->model
            ->where('phone', $data['phone'])
            ->first();

        if (!$user) {
            // User mới
            $user = $this->model->create([
                'fullname' => $data['fullname'],
                'phone'    => $data['phone'],
                'gender'   => $data['gender'] ?? null,
                'age'      => $data['age'] ?? null,
                'address'  => $data['address'] ?? null,
            ]);
        }
        return to_route('luckyBoxIndex')->with('msg_success', trans('Bạn đã tham gia chương trình thành công!. Chúc bạn may mắn với thẻ quà tặng đã chọn'));
    }

    public function index()
    {
        return Inertia::render('home/Index', [
            'genders' => Gender::asSelectArray(),
        ]);
    }
}