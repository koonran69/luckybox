<?php

namespace Domains\Admin\Repositories\Role;

use Domains\Admin\Models\Role;
use Domains\Core\Repositories\EloquentRepository;

class RoleRepository extends EloquentRepository implements RoleRepositoryInterface
{

    public function getModel(){
        return Role::class;
    }

    public function searchAllLimit($keySearch = '', $meta = [], $limit = 10)
    {
        $this->instance = $this->model;
        $this->instance = $this->instance->where('name', 'LIKE', '%'.$keySearch.'%');
        $this->applyFilters($meta);
        
        return $this->instance->limit($limit)->get();
    }

    public function createHasPermissions(array $data, array $permissions)
    {
        $instance = $this->create($data);

        $instance->permissions()->attach($permissions);

        return $instance;
    }

    public function updateHasPermissions($id, array $data, array $permissions)
    {
        $this->update($id, $data);

        $this->instance->permissions()->sync($permissions);

        return $this->instance;
    }
}