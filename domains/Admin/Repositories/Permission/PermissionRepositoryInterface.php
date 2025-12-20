<?php

namespace Domains\Admin\Repositories\Permission;

use Domains\Core\Repositories\EloquentRepositoryInterface;

interface PermissionRepositoryInterface extends EloquentRepositoryInterface
{
    public function searchAllLimit($value = '', $meta = [], $limit = 10);
}