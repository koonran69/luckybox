<?php

namespace Domains\Blog\Http\Controllers\Cms;

use Domains\Blog\DataTables\PostDataTable;
use Domains\Blog\Http\Requests\Cms\PostRequest;
use Domains\Blog\Models\Category;
use Domains\Blog\Models\Post;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Enums\DefaultStatus;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function __construct(
        public Post $model,
    )
    {
        
    }
    
    public function index(PostDataTable $dataTable)
    {
        return $dataTable->render('cms.blogs.posts.index', [
            'breadcrumb' => $this->breadcrumb()->add(trans('Blogs'))->add(trans('Bài viết'))
        ]);
    }

    public function create()
    {
        return view('cms.blogs.posts.create')

        ->with('categories', Category::getFlatTree())

        ->with('status', DefaultStatus::asSelectArray())

        ->with('breadcrumb', $this->breadcrumb()->addByRouteName(trans('Bài viết'), 'cms.post.index')->add(trans('Thêm')));
    }

    public function store(PostRequest $request)
    {
        DB::beginTransaction();
        try {
            
            $data = $request->validated();
            $data['post']['is_featured'] = isset($data['post']['is_featured']) ? $data['post']['is_featured'] : false;
            
            $post = $this->model->create($data['post']);

            if(!empty($data['categories_id']))
            {
                $post->categories()->attach($data['categories_id']);
            }

            DB::commit();

            return utilities()->toRoute('cms.post.edit', $post->id);

        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function edit($id)
    {
        $post = $this->model->findOrFail($id)->load(['categories']);

        return view('cms.blogs.posts.edit')

        ->with('categories', Category::getFlatTree())

        ->with('status', DefaultStatus::asSelectArray())

        ->with('post', $post)
        
        ->with('breadcrumb', $this->breadcrumb()->addByRouteName(trans('Bài viết'), 'cms.post.index')->add(trans('Sửa')));
    }

    public function update(PostRequest $request)
    {
        DB::beginTransaction();
        try {
            
            $data = $request->validated();
            
            $data['post']['is_featured'] = isset($data['post']['is_featured']) ? $data['post']['is_featured'] : false;

            $post = $this->model->findOrFail($data['post']['id']);

            $post->update($data['post']);

            $post->categories()->sync($data['categories_id']);

            DB::commit();

            return utilities()->responseBack();

        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function delete($id)
    {
        $this->model->findOrFail($id)->delete();

        if(request()->ajax())
        {
            return utilities()->responseAjax();
        }

        return utilities()->toRoute('cms.post.index');
    }
}