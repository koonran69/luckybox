<?php

namespace Domains\Admin\DataTables;

use Domains\Admin\Repositories\Admin\AdminRepositoryInterface;
use Domains\Core\DataTables\DataTables;
use Domains\Core\Enums\Gender;
use Domains\Core\Supports\Helper;

class AdminDataTable extends DataTables
{

    public function __construct(
        public AdminRepositoryInterface $repo
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['fullname', 'phone', 'email', 'gender', 'created_at'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    protected function setColumnSearchSelect(): void
    {
        $this->columnSearchSelect = [
            'gender' => [
                'data' => Gender::asSelectArray()
            ]
        ];
    }
    
    public function query()
    {
        return $this->repo->orderBy();
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'created_at' => fn($row) => Helper::formatDate($row->created_at)
        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.admins.datatable.action',
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['fullname', 'action'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'fullname' => [
                'title' => 'Họ và tên',
                'orderable' => false,
            ],
            'phone' => [
                'title' => 'SĐT',
                'orderable' => false,
            ],
            'email' => [
                'title' => 'Email',
                'orderable' => false,
            ],
            'gender' => [
                'title' => 'Giới tính',
                'orderable' => false,
            ],
            'created_at' => [
                'title' => 'Ngày tạo',
                'orderable' => false,
                'visible' => false,
            ],
            'action' => [
                'title' => 'Hành động',
                'orderable' => false,
                'exportable' => false,
                'printable' => false,
                'addClass' => 'text-center'
            ]
        ];
    }
}