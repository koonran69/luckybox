<?php

namespace Domains\DataStore\Http\Controllers\Cms\Banner;

use Domains\Cms\Http\Controllers\Controller;
use Domains\DataStore\DataTables\Banner\BannerDataTable;
use Domains\DataStore\Models\Banner;

class BannerController extends Controller
{
    public function __construct(
        public Banner $model
    )
    {
        
    }   
    
    public function index(BannerDataTable $dataTable)
    {
        return $dataTable->render('cms.data_stores.banners.index', [
            'breadcrumb' => $this->breadcrumb()->add(trans('Banner'))
        ]);
    }
}