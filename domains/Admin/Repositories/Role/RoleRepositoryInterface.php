<?php

namespace Domains\Admin\Repositories\Role;

use Domains\Core\Repositories\EloquentRepositoryInterface;

interface RoleRepositoryInterface extends EloquentRepositoryInterface
{
    public function searchAllLimit($value = '', $meta = [], $limit = 10);
    public function createHasPermissions(array $data, array $permissions);
    public function updateHasPermissions($id, array $data, array $permissions);
}