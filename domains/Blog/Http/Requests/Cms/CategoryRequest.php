<?php

namespace Domains\Blog\Http\Requests\Cms;

use Domains\Core\Enums\DefaultStatus;
use Domains\Core\Http\Requests\Request;
use Illuminate\Validation\Rules\Enum;

class CategoryRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {

        return [
            'parent_id' => ['nullable', 'exists:Domains\Blog\Models\Category,id'],
            'title' => ['required', 'string'],
            'status' => ['required', new Enum(DefaultStatus::class)],
            'meta_seo' => ['nullable']
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\Blog\Models\Category,id'],
            'parent_id' => ['nullable', 'exists:Domains\Blog\Models\Category,id'],
            'title' => ['required', 'string'],
            'status' => ['required', new Enum(DefaultStatus::class)],
            'meta_seo' => ['nullable']
        ];
    }
}