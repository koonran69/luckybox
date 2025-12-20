<?php

namespace Domains\Admin\Repositories\Admin;

use Domains\Core\Repositories\EloquentRepositoryInterface;

interface AdminRepositoryInterface extends EloquentRepositoryInterface
{
    public function updateHasRoleAndPermission($id, array $data, array $roles = [], array $permissions = []);
    
    public function createHasRoleAndPermission(array $data, array $roles = [], array $permissions = []);
}