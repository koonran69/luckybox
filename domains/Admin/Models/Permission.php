<?php

namespace Domains\Admin\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Permission extends BaseModel
{
    use HasFactory;

    protected $table = 'permissions';

    protected $fillable = [
        'name',
        'route_names',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'route_names' => AsArrayObject::class
        ];
    }
}
