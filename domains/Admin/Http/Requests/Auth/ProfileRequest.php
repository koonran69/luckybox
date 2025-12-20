<?php

namespace Domains\Admin\Http\Requests\Auth;

use Domains\Core\Http\Requests\Request;

class ProfileRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPut()
    {
        return [
            'fullname' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/', 'unique:Domains\Admin\Models\Admin,phone,'.get_auth_admin()->id],
            'birthday' => ['nullable', 'date_format:Y-m-d']
        ];
    }
}