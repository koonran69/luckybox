<?php

namespace Domains\Blog\Http\Requests\Cms;

use Domains\Core\Enums\DefaultStatus;
use Domains\Core\Http\Requests\Request;
use Illuminate\Validation\Rules\Enum;

class PostRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {

        return [
            'categories_id' => ['nullable', 'array'],
            'categories_id.*' => ['nullable', 'exists:Domains\Blog\Models\Category,id'],
            'post.title' => ['required', 'string'],
            'post.status' => ['required', new Enum(DefaultStatus::class)],
            'post.thumbnail' => ['nullable'],
            'post.is_featured' => ['nullable', 'boolean'],
            'post.content' => ['nullable'],
            'post.excerpt' => ['nullable'],
            'post.posted_at' => ['nullable'],
            'post.meta_seo' => ['nullable'],
        ];
    }

    protected function methodPut()
    {
        return [
            'post.id' => ['required', 'exists:Domains\Blog\Models\Post,id'],
            'categories_id' => ['nullable', 'array'],
            'categories_id.*' => ['nullable', 'exists:Domains\Blog\Models\Category,id'],
            'post.title' => ['required', 'string'],
            'post.status' => ['required', new Enum(DefaultStatus::class)],
            'post.thumbnail' => ['nullable'],
            'post.is_featured' => ['nullable', 'boolean'],
            'post.content' => ['nullable'],
            'post.excerpt' => ['nullable'],
            'post.posted_at' => ['nullable'],
            'post.meta_seo' => ['nullable'],
        ];
    }
}