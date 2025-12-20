<?php

namespace Domains\Blog\DataTables;

use Domains\Blog\Models\Category;
use Domains\Core\DataTables\DataTables;

class CategoryDataTable extends DataTables
{
    public string $nameTable = 'postCat';

    public function __construct(
        public Category $model
    ){
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['title'];
    }
    
    public function query()
    {
        return $this->model->getFlatTree();
    }

    protected function makeBuilderDataTable($query): void
    {
        $this->instanceDataTable = datatables()->collection($query);
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'status' => fn($row) => sprintf("<span class='badge %s'>%s</span>", $row->status->badge(), $row->status->description())
        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.blogs.categories.datatable.action',
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['action', 'status'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'title' => [
                'title' => 'Tiêu đề',
                'orderable' => false,
            ],
            'status' => [
                'title' => 'Trạng thái',
                'orderable' => false,
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