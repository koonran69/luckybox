<?php

namespace Domains\Blog\Http\Controllers\Cms;

use Domains\Blog\DataTables\PostCommentDataTable;
use Domains\Blog\Models\PostComment;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Product\DataTables\ProductReviewDataTable;
use Domains\Product\Enums\ReviewStatus;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{
    public function __construct(
        public PostComment $model
    )
    {
        
    }

    public function index(PostCommentDataTable $dataTable)
    {
        $status = ReviewStatus::asSelectArray();

        return $dataTable->render('cms.blogs.comments.index', [
            'status' => $status,
            'breadcrumb' => $this->breadcrumb()->add(trans('Blogs'))->add(trans('Bình luận')),
        ]);
    }

    public function edit($id)
    {
        return view('cms.blogs.comments.edit')

        ->with('status', ReviewStatus::asSelectArray())

        ->with('data', $this->model->findOrFail($id));
    }

    public function update(Request $request)
    {
        $this->model->findOrFail($request->input('id'))->update([
            'status' => $request->enum('status', ReviewStatus::class)
        ]);
    }

    public function updateMultiple(Request $request)
    {
        $query = $this->model->makeQuery([['id', 'in', $request->array('ids')]]);
        
        if($request->input('action') == 'delete')
        {
            $query->delete();

        }else if($request->enum('action', ReviewStatus::class)) {

            $query->update(['status' => $request->enum('action', ReviewStatus::class)]);
        }
        
        return utilities()->responseBack();
    }

    public function delete($id)
    {
        $this->model->findOrFail($id)->delete($id);

        return utilities()->responseAjax();
    }
}