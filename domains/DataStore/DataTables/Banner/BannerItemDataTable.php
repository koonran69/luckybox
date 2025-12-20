<?php

namespace Domains\DataStore\DataTables\Banner;

use Domains\Core\DataTables\DataTables;
use Domains\DataStore\Models\BannerItem;

class BannerItemDataTable extends DataTables
{
    public string $nameTable = 'bannerItem';

    public function __construct(
        public BannerItem $model
    ){
        
    }
    
    public function query()
    {
        return $this->model->makeQuery(filter: ['banner_position' => $this->banner_position], sort: ['position', 'asc']);
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'action' => 'cms.data_stores.banners.items.datatable.action',
        ];
    }

    protected function setEditColumns(): void
    {
        $this->editColumns = [
            'title' => fn($row) => view('cms.data_stores.banners.items.datatable.title')->with('data', $row),
            'image_desktop' => fn($row) => view('cms.data_stores.banners.items.datatable.image')->with('data', $row),
            // 'image_mobile' => fn($row) => view('cms.banners.items.datatable.image')->with('image', $row->image_mobile)
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['action', 'title', 'image_desktop', 'image_mobile'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'title' => [
                'title' => 'Tiêu đề',
                'orderable' => false,
            ],
            'image_desktop' => [
                'title' => 'Hình trên desktop',
                'orderable' => false,
            ],
            // 'image_mobile' => [
            //     'title' => 'Hình trên mobile',
            //     'orderable' => false,
            // ],
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