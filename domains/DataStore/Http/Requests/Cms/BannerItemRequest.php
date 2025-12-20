<?php

namespace Domains\DataStore\Http\Requests\Cms;

use Domains\Core\Http\Requests\Request;
use Domains\DataStore\Enums\BannerItemType;
use Illuminate\Validation\Rules\Enum;

class BannerItemRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {

        return [
            'banner_position' => ['required', 'exists:Domains\DataStore\Models\Banner,position'],
            'title' => ['nullable', 'string'],
            'subtitle' => ['nullable'],
            'image_desktop' => ['nullable'],
            'image_mobile' => ['nullable'],
            'link' => ['nullable'],
            'type' => ['required', new Enum(BannerItemType::class)],
            'video' => ['nullable'],
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\DataStore\Models\BannerItem,id'],
            'title' => ['nullable', 'string'],
            'subtitle' => ['nullable'],
            'image_desktop' => ['nullable'],
            'image_mobile' => ['nullable'],
            'link' => ['nullable'],
            'type' => ['required', new Enum(BannerItemType::class)],
            'video' => ['nullable'],
        ];
    }
}