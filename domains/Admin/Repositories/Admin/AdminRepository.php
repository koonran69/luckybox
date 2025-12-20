<?php

namespace Domains\Admin\Repositories\Admin;

use Domains\Admin\Models\Admin;
use Domains\Core\Repositories\EloquentRepository;
use Illuminate\Support\Facades\DB;

class AdminRepository extends EloquentRepository implements AdminRepositoryInterface
{

    public function getModel(){
        return Admin::class;
    }

    public function updateHasRoleAndPermission($id, array $data, array $roles = [], array $permissions = [])
    {
        DB::beginTransaction();
        try {

            if(empty($data['password']))
            {
                unset($data['password']);
            }
            $this->update($id, $data);

            $this->instance->roles()->sync($roles);

            $this->instance->permissions()->sync($permissions);

            $this->instance->access_route_names = array_values($this->instance->getRouteNamesAccessByPermissionAndRole());

            $this->instance->save();

            DB::commit();
            
            return $this->instance;
        } catch (\Throwable $th) {

            DB::rollBack();

            throw $th;
        }
    }

    public function createHasRoleAndPermission(array $data, array $roles = [], array $permissions = [])
    {
        DB::beginTransaction();
        try {
            $admin = $this->create($data);

            if(count($roles) > 0)
            {
                $admin->roles()->attach($roles);
            }

            if(count($permissions) > 0)
            {
                $admin->permissions()->attach($permissions);

                $admin->access_route_names = array_values($admin->getRouteNamesAccessByPermissionAndRole());

                $admin->save();
            }

            DB::commit();

            return $admin;
        } catch (\Throwable $th) {

            DB::rollBack();

            throw $th;
        }     
    }

    protected function getQueryBuilderFindByKey($key){
        $this->instance = $this->instance->whereAny([
            'username',
            'phone',
            'fullname',
            'email'
        ], 'LIKE', '%'.$key.'%');
    }
}