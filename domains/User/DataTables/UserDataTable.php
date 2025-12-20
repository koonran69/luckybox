<?php

namespace Domains\User\DataTables;

use Domains\Core\DataTables\DataTables;
use Domains\User\Models\User;

class UserDataTable extends DataTables
{

    public string $nameTable = 'users';

    public function __construct(
        public User $model
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['fullname', 'phone', 'email', 'created_at'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    public function query()
    {
        return $this->model->makeQuery()->withCount('orders')->withSum('orders', 'total');
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'created_at' => fn($row) => utilities()->formatDatetime($row->created_at),
            'orders_sum_total' => fn($row) => utilities()->formatPrice($row->orders_sum_total)
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
        $this->rawColumns = ['action'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'fullname' => [
                'title' => 'Họ và tên',
                'orderable' => false,
            ],
            'phone' => [
                'title' => 'phone',
                'orderable' => false,
            ],
            'email' => [
                'title' => 'email',
                'orderable' => false,
            ],
            'orders_count' => [
                'title' => 'SL đơn hàng',
                'orderable' => false,
            ],
            'orders_sum_total' => [
                'title' => 'Tổng chi tiêu',
                'orderable' => false,
            ],
            'created_at' => [
                'title' => 'Ngày tạo',
                'orderable' => false,
                'visible' => false,
            ],
            'action' => [
                'title' => 'action',
                'orderable' => false,
                'exportable' => false,
                'printable' => false,
                'addClass' => 'text-center'
            ]
        ];
    }
}
