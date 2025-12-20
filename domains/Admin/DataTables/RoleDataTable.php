<?php

namespace Domains\Admin\DataTables;

use Domains\Admin\Repositories\Role\RoleRepositoryInterface;
use Domains\Core\DataTables\DataTables;
use Domains\Core\Supports\Helper;

class RoleDataTable extends DataTables
{

    public function __construct(
        public RoleRepositoryInterface $repository
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
    
    /**
     * Get query source of dataTable.
     *
     * @param \Domains\Admin\Models\Admin $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
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
            'action' => 'cms.roles.datatable.action',
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
                'title' => 'Tên',
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
            ],
        ];
    }
}