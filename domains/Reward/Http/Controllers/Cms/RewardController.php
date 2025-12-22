<?php

namespace Domains\Reward\Http\Controllers\Cms;

use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Enums\Gender;
use Domains\Reward\DataTables\RewardDataTable;
use Domains\User\DataTables\UserDataTable;
use Domains\User\Http\Requests\Cms\UserRequest;
use Domains\Web\Enums\RewardHistoryStatus;
use Domains\Web\Models\Reward;
use Domains\Web\Models\RewardHistory;
use Illuminate\Http\Request;

class RewardController extends Controller
{
    public function __construct(
        public Reward $model,
    ) {}

    public function index(RewardDataTable $datatable)
    {
        return $datatable->render('cms.rewards.index', [
            'breadcrumb' => $this->breadcrumb()->addByRouteName(trans('Phần thưởng'))
        ]);
    }

    public function inlineUpdate(Request $request, Reward $reward)
    {
        $data = $request->validate([
            'field' => 'required|in:total_quantity,remaining_quantity,weight',
            'value' => 'required|numeric|min:0',
        ]);

        // Optional: validate logic
        if (
            $data['field'] === 'remaining_quantity' &&
            $data['value'] > $reward->total_quantity
        ) {
            return utilities()->responseAjax(true, 'Số còn lại không được lớn hơn tổng');
        }

        $reward->update([
            $data['field'] => $data['value'],
        ]);

        return utilities()->responseAjax(false, 'Cập nhật thành công');
    }


}
