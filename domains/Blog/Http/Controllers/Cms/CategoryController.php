<?php

namespace Domains\Blog\Http\Controllers\Cms;

use Domains\Blog\DataTables\CategoryDataTable;
use Domains\Blog\Http\Requests\Cms\CategoryRequest;
use Domains\Blog\Models\Category;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Enums\DefaultStatus;

class CategoryController extends Controller
{
    public function __construct(
        public Category $model
    )
    {
        
    }   
    
    public function index(CategoryDataTable $dataTable)
    {
        return $dataTable->render('cms.blogs.categories.index', [
            'breadcrumb' => $this->breadcrumb()->add(trans('Blogs'))->add(trans('Chuyên mục'))
        ]);
    }

    public function create()
    {
        return view('cms.blogs.categories.modals.create')->with('status', DefaultStatus::asSelectArray());
    }

    public function store(CategoryRequest $request)
    {
        $this->model->create($request->validated());

        return utilities()->responseAjax();
    }

    public function edit($id)
    {
        return view('cms.blogs.categories.modals.edit')

        ->with('status', DefaultStatus::asSelectArray())

        ->with('data', $this->model->findOrFail($id));
    }

    public function update(CategoryRequest $request)
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