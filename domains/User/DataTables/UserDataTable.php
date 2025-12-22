<?php

namespace Domains\User\DataTables;

use Domains\Core\DataTables\DataTables;
use Domains\User\Models\User;
use Domains\Web\Enums\RewardHistoryStatus;
use Domains\Web\Models\Reward;

class UserDataTable extends DataTables
{

    public string $nameTable = 'users';

    public function __construct(
        public User $model
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['fullname', 'phone', 'email', 'rewarded', 'created_at'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    protected function setFilterColumns(): void
    {
        $this->filterColumns = [
            'fullname' => fn($q, $k) => $q->where('fullname', 'like', "%$k%"),
            'phone' => fn($q, $k) => $q->where('phone', 'like', "%$k%"),
            'email' => fn($q, $k) => $q->where('email', 'like', "%$k%"),
            'rewarded' => fn($q, $k) => $q->whereRelation('reward_history.rewarded', function ($q) use ($k) {
                $q->where('id', $k);
            }),
        ];
    }

    protected function setColumnSearchSelect(): void
    {
        $this->columnSearchSelect = [
            'rewarded' => [
                'data' => Reward::get()
                    ->mapWithKeys(function ($item) {
                        return [
                            $item->id => $item->name?? '',
                        ];
                    })
                    ->toArray(),
            ],
        ];
    }

    public function query()
    {
        $data = $this->model->makeQuery()
            ->with(['reward_history.rewarded','spin_ticket'])
            ->withCount([
                'spin_ticket as spin_ticket_used_count' => function ($query) {
                    $query->where('is_used', 1);
                },
                'spin_ticket as spin_ticket_unused_count' => function ($query) {
                    $query->where('is_used', 0);
                },
            ]);
        return $data;
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'created_at' => fn($row) => utilities()->formatDatetime($row->created_at),
            'spin_info' => fn($row) => view('cms.users.datatable.spin_info')->with('data', $row),
            'rewarded' => fn($row) => view('cms.users.datatable.rewarded')->with('data', $row),
        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.users.datatable.action'
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['action','spin_info','rewarded'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'fullname' => [
                'title' => 'Họ và tên',
                'orderable' => false,
            ],
            'phone' => [
                'title' => 'Số điện thoại',
                'orderable' => false,
            ],
            'email' => [
                'title' => 'email',
                'orderable' => false,
            ],
            'spin_info' => [
                'title' => 'Thông tin lượt chơi',
                'orderable' => false,
            ],
            'rewarded' => [
                'title' => 'Thông tin phần thưởng',
                'orderable' => false,
            ],
            'created_at' => [
                'title' => 'Ngày tham gia',
                'orderable' => false,
                'visible' => false,
            ],
//            'action' => [
//                'title' => 'action',
//                'orderable' => false,
//                'exportable' => false,
//                'printable' => false,
//                'addClass' => 'text-center'
//            ]
        ];
    }
}
