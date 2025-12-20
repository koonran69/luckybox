<?php

namespace Domains\Blog\DataTables;

use Domains\Blog\Models\PostComment;
use Domains\Core\DataTables\DataTables;
use Domains\Product\Enums\ReviewStatus;

class PostCommentDataTable extends DataTables
{
    public string $nameTable = 'postComment';

    public function __construct(
        public PostComment $model
    )
    {

    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['status', 'created_at', 'post_id', 'user_id'];
    }

    protected function setColumnSearchDate(): void
    {
        $this->columnSearchDate = ['created_at'];
    }

    protected function setColumnSearchSelect(): void
    {
        $this->columnSearchSelect = [
            'status' => [
                'data' => ReviewStatus::asSelectArray()
            ]
        ];
    }

    public function query()
    {
        return $this->model->makeQuery(filter: [], relations: ['post', 'user']);
    }

    protected function setFilterColumns(): void
    {
        $this->filterColumns = [
            'post_id' => fn($q, $k) => $q->whereRelation('post', 'title', 'like', "%$k%"),
            'user_id' => fn($q, $k) => $q->whereRelation('user', 'fullname', 'like', "%$k%")->orWhere('name', 'like', "%$k%"),
        ];
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'content' => fn($row) => view('cms.blogs.comments.datatable.content')->with('data', $row),
            'status' => fn($row) => sprintf("<span class='badge %s'>%s</span>", $row->status->badge(), $row->status->description()),
            'post_id' => fn($row) => $row->post?->title,
            'user_id' => fn($row) => $row->user?->fullname ?: $row->name ?: trans('No name'),
            'created_at' => fn($row) => utilities()->formatDatetime($row->created_at)
        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.blogs.comments.datatable.action',
            'checkbox' => fn($row) => "<input type='checkbox' name='ids[]' value='". $row->id ."' class='form-check-input check-list'>"
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['action', 'status', 'checkbox'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'checkbox' => [
                'title' => 'Chọn',
                'orderable' => true,
                'footer' => '<input type="checkbox" class="form-check-input check-all" >',
                'addClass' => 'text-center',
            ],
            'content' => [
                'title' => 'Nội dung',
                'orderable' => false,
            ],
            'status' => [
                'title' => 'Trạng thái',
                'orderable' => false,
            ],
            'post_id' => [
                'title' => 'Bài viết',
                'orderable' => false,
            ],
            'user_id' => [
                'title' => 'Người dùng',
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