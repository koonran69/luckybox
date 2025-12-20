<?php

namespace Domains\DataStore\Http\Controllers\Cms\Banner;

use Domains\Cms\Http\Controllers\Controller;
use Domains\DataStore\DataTables\Banner\BannerItemDataTable;
use Domains\DataStore\Enums\BannerItemType;
use Domains\DataStore\Http\Requests\Cms\BannerItemRequest;
use Domains\DataStore\Models\Banner;
use Domains\DataStore\Models\BannerItem;

class BannerItemController extends Controller
{

    public function __construct(
        public BannerItem $model,
        public Banner $modelBanner
    )
    {}   
    
    public function index($banner_position, BannerItemDataTable $dataTable)
    {
        $banner = $this->modelBanner->findByOrFail(filter: ['position' => $banner_position]);

        return $dataTable->with('banner_position', $banner_position)->render('cms.data_stores.banners.items.index', [
            'banner_position' => $banner_position,
            'breadcrumb' => $this->breadcrumb()->addByRouteName(trans('Banner'), 'cms.banner.index')->add(trans($banner->position->description()))
        ]);
    }

    public function create($banner_position)
    {
        return view('cms.data_stores.banners.items.modals.create')
        
        ->with('type', BannerItemType::asSelectArray())

        ->with('banner_position', $banner_position);
    }

    public function store(BannerItemRequest $request)
    {
        $this->model->create($request->validated());

        return utilities()->responseAjax();
    }

    public function edit($id)
    {
        return view('cms.data_stores.banners.items.modals.edit')

        ->with('type', BannerItemType::asSelectArray())

        ->with('data', $this->model->findOrFail($id));
    }

    public function update(BannerItemRequest $request)
    {
        $this->model->findOrFail($request->input('id'))->update($request->validated());

        return utilities()->responseAjax();
    }

    public function delete($id)
    {
        $this->model->findOrFail($id)->delete();

        return utilities()->responseAjax();
    }
}