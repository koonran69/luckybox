<?php

namespace Domains\Admin\Http\Requests\Admin;

use Domains\Core\Http\Requests\Request;

class AdminRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {
        return [
            'admin.email' => ['required', 'email', 'unique:Domains\Admin\Models\Admin,email'],
            'admin.fullname' => ['required', 'string'],
            'admin.phone' => ['required', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/', 'unique:Domains\Admin\Models\Admin,phone'],
            'admin.password' => ['required', 'string', 'confirmed'],
            'admin.birthday' => ['nullable', 'date_format:Y-m-d'],
            'admin.is_superadmin' => ['nullable', 'boolean'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['nullable', 'exists:Domains\Admin\Models\Permission,id'],
            'roles' => ['nullable', 'array'],
            'roles.*' => ['nullable', 'exists:Domains\Admin\Models\Role,id'],
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\Admin\Models\Admin,id'],
            'admin.email' => ['required', 'email', 'unique:Domains\Admin\Models\Admin,email,'.$this->id],
            'admin.fullname' => ['required', 'string'],
            'admin.phone' => ['required', 'regex:/((09|03|07|08|05)+([0-9]{8})\b)/', 'unique:Domains\Admin\Models\Admin,phone,'.$this->id],
            'admin.password' => ['nullable', 'string', 'confirmed'],
            'admin.birthday' => ['nullable', 'date_format:Y-m-d'],
            'admin.is_superadmin' => ['nullable', 'boolean'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['nullable', 'exists:Domains\Admin\Models\Permission,id'],
            'roles' => ['nullable', 'array'],
            'roles.*' => ['nullable', 'exists:Domains\Admin\Models\Role,id']
        ];
    }

    /**
     * Handle a passed validation attempt.
     */
    protected function passedValidation(): void
    {
        if($this->input('admin.is_superadmin', false))
        {
            $data = $this->validator->getData();

            $data['roles'] = $data['permissions'] = [];
            
            $this->validator->setData($data);
        }else {
            if($this->isMethod('put'))
            {
                $data = $this->validator->getData();

                $data['admin']['is_superadmin'] = false;

                $this->validator->setData($data);
            }
        }
    }
}