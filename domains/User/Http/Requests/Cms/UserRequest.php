<?php

namespace Domains\User\Http\Requests\Cms;

use Domains\Core\Enums\Gender;
use Domains\Core\Http\Requests\Request;
use Illuminate\Validation\Rules\Enum;

class UserRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {
        return [
            'email' => ['required', 'email', 'unique:Domains\User\Models\User,email'],
            'fullname' => ['required', 'string'],
            'phone' => ['required', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/', 'unique:Domains\User\Models\User,phone'],
            'password' => ['required', 'string', 'confirmed'],
            'birthday' => ['nullable', 'date_format:Y-m-d'],
            'gender' => ['required', new Enum(Gender::class)],
            'province_code' => ['nullable', 'string'],
            'district_code' => ['nullable', 'string'],
            'ward_code' => ['nullable', 'string'],
            'address' => ['nullable', 'string']
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\User\Models\User,id'],
            'email' => ['required', 'email', 'unique:Domains\User\Models\User,email,'.$this->id],
            'fullname' => ['required', 'string'],
            'phone' => ['required', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/', 'unique:Domains\User\Models\User,phone,'.$this->id],
            'password' => ['nullable', 'string', 'confirmed'],
            'birthday' => ['nullable', 'date_format:Y-m-d'],
            'gender' => ['required', new Enum(Gender::class)],
            'province_code' => ['nullable', 'string'],
            'district_code' => ['nullable', 'string'],
            'ward_code' => ['nullable', 'string'],
            'address' => ['nullable', 'string']
        ];
    }
}
