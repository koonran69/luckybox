<?php

namespace Domains\Admin\DataTables;

use Domains\Admin\Repositories\Permission\PermissionRepositoryInterface;
use Domains\Core\DataTables\DataTables;
use Domains\Core\Supports\Helper;

class PermissionDataTable extends DataTables
{
    public function __construct(
        public PermissionRepositoryInterface $repository
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['name', 'created_at'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    public function query()
    {
        return $this->repository->orderBy('id', 'desc');
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
            'action' => 'cms.permissions.datatable.action',
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['name', 'action'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'name' => [
                'title' => 'name',
                'orderable' => false,
            ],
            'created_at' => [
                'title' => 'createdAt',
                'orderable' => false,
                'visible' => false,
            ],
            'action' => [
                'title' => 'Hành động',
                'orderable' => false,
                'exportable' => false,
                'printable' => false,
                'addClass' => 'text-center'
            ],
        ];
    }
}