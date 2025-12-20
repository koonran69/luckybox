<?php

namespace Domains\ContactForm\DataTables;

use Domains\ContactForm\Enums\ContactFormStatus;
use Domains\ContactForm\Models\ContactForm;
use Domains\Core\DataTables\DataTables;

class ContactFormDataTable extends DataTables
{

    public string $nameTable = 'contactForm';

    public function __construct(
        public ContactForm $model
    ) {
    }

    protected function setColumnHasSearch(): void
    {
        $this->columnHasSearch = ['info', 'status'];
    }

    protected function setFilterColumns(): void
    {
        $this->filterColumns = [
            'info' => fn($q, $k) => $q->whereAny(['fullname', 'email', 'phone'], 'like', "%$k%")
        ];
    }

    protected function setColumnSearchSelect(): void
    {
        $this->columnSearchSelect = [
            'status' => [
                'data' => ContactFormStatus::asSelectArray()
            ]
        ];
    }

    public function query()
    {
        return $this->model->makeQuery();
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'info' => fn($row) => view('cms.contactforms.datatable.info')->with('data', $row),
            'created_at' => fn($row) => utilities()->formatDatetime($row->created_at),
            'status' => fn ($row) => sprintf('<span class="badge %s">%s</span>', $row->status->badge(), $row->status->description()),

        ];
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.contactforms.datatable.action',
            'checkbox' => fn($row) => "<input type='checkbox' name='ids[]' value='". $row->id ."' class='form-check-input check-list'>"
        ];

    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['info', 'action', 'status', 'checkbox'];
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
            'info' => [
                'title' => 'Thông tin',
                'orderable' => false,
            ],
            'status' => [
                'title' => 'Trạng thái',
                'orderable' => false,
                'addClass' => 'text-center'
            ],
            'content' => [
                'title' => 'Lời nhắn',
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
