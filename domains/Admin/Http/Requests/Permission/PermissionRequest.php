<?php

namespace Domains\Admin\Http\Requests\Permission;

use Domains\Core\Http\Requests\Request;

class PermissionRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function methodPost()
    {
        return [
            'name' => ['required', 'string', 'unique:Domains\Admin\Models\Permission,name'],
            'route_names' => ['required', 'array'],
            'route_names.*' => ['required', 'string']
        ];
    }

    protected function methodPut()
    {
        return [
            'id' => ['required', 'exists:Domains\Admin\Models\Permission,id'],
            'name' => ['required', 'string', 'unique:Domains\Admin\Models\Permission,name,'.$this->id],
            'route_names' => ['required', 'array'],
            'route_names.*' => ['required', 'string']
        ];
    }
}