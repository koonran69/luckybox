<?php

namespace Domains\Admin\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends BaseModel
{
    use HasFactory;

    protected $table = 'roles';

    protected $fillable = [
        'name',
    ];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'role_has_permissions', 'role_id', 'permission_id');
    }
}
