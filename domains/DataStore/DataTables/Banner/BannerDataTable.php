<?php

namespace Domains\DataStore\DataTables\Banner;

use Domains\Core\DataTables\DataTables;
use Domains\DataStore\Models\Banner;

class BannerDataTable extends DataTables
{
    public string $nameTable = 'banner';

    public function __construct(
        public Banner $model
    ){
    }
    
    public function query()
    {
        return $this->model->makeQuery(relations: ['items']);
    }

    protected function setAddColumns(): void
    {
        $this->addColumns = [
            'position' => fn($row) => $row->position->description(),
            'items' => fn($row) => view('cms.data_stores.banners.datatable.items')->with('data', $row)
        ];
    }

    protected function setRawColumns(): void
    {
        $this->rawColumns = ['items'];
    }

    protected function setConfigColumns(): void
    {
        $this->configColumns = [
            'position' => [
                'title' => 'Vị trí',
                'orderable' => false,
            ],
            'items' => [
                'title' => 'Items',
                'orderable' => false,
            ],
        ];
    }
}