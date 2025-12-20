<?php

namespace Domains\Admin\Http\Requests\Role;

use Domains\Core\Http\Requests\Request;

class RoleRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {
        return [
            'role.name' => ['required', 'string', 'unique:Domains\Admin\Models\Role,name'],
            'permissions' => ['required', 'array'],
            'permissions.*' => ['required', 'exists:Domains\Admin\Models\Permission,id']
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\Admin\Models\Role,id'],
            'role.name' => ['required', 'string', 'unique:Domains\Admin\Models\Role,name,'.$this->id],
            'permissions' => ['required', 'array'],
            'permissions.*' => ['required', 'exists:Domains\Admin\Models\Permission,id']
        ];
    }
}