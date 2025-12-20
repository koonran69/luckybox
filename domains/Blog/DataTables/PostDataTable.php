<?php

namespace Domains\Blog\DataTables;

use Domains\Blog\Models\Post;
use Domains\Core\DataTables\DataTables;
use Domains\Core\Enums\DefaultStatus;

class PostDataTable extends DataTables
{
    public string $nameTable = "post";

    public function __construct(
        public Post $model
    )
    {

    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['title', 'categories', 'status'];
    }

    // protected function setColumnSearchDate(): void
    // {
    //     $this->columnSearchDate = ['created_at'];
    // }

    protected function setColumnSearchSelect(): void
    {
        $this->columnSearchSelect = [
            'status' => [
                'data' => DefaultStatus::asSelectArray()
            ]
        ];
    }

    public function query()
    {
        return $this->model->makeQuery(relations: ['categories']);
    }

    protected function setFilterColumns(): void
    {
        $this->filterColumns = [
            'title' => fn($q, $k) => $q->where('title', 'like', "%$k%"),
            'categories' => fn($q, $k) => $q->whereRelation('categories', 'title', 'like', "%$k%")
        ];
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'title' => fn($row) => view('cms.blogs.posts.datatable.title')->with('data', $row),
            'status' => fn($row) => sprintf("<span class='badge %s'>%s</span>", $row->status->badge(), $row->status->description()),
            'categories' => fn($row) => $row->categories->pluck('title')->implode(', '),
        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.blogs.posts.datatable.action',
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['action', 'title', 'status'];
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
            'categories' => [
                'title' => 'Chuyên mục',
                'orderable' => false,
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