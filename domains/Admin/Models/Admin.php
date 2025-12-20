<?php

namespace Domains\Admin\Models;

use Domains\Admin\Observers\AdminObserver;
use Domains\Admin\Supports\Authorization\AccessRoute;
use Domains\Core\Enums\Gender;
use Domains\Core\Traits\ModelTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Casts\Attribute;

#[ObservedBy([AdminObserver::class])]
class Admin extends Authenticatable
{
    use HasFactory, Notifiable, AccessRoute, ModelTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'fullname',
        'phone',
        'email',
        'birthday',
        'gender',
        'avatar',
        'status',
        'birthday',
        'is_superadmin',
        'password',
        'access_route_names',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_superadmin' => 'boolean',
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'access_route_names' => AsArrayObject::class,
            'gender' => Gender::class
        ];
    }

    public function roles(){
        return $this->belongsToMany(Role::class, 'admin_has_roles', 'admin_id', 'role_id');
    }

    public function permissions(){
        return $this->belongsToMany(Permission::class, 'admin_has_permissions', 'admin_id', 'permission_id');
    }

    protected function fullname(): Attribute
    {
        return Attribute::make(
            get: fn (mixed $value, array $attributes) => $attributes['fullname'] ?: $attributes['username'] ?: $attributes['email']
        );
    }

    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn (string|null $value = null) => asset($value ?: config('core.images.avatar'))
        );
    }

    public function getRoleNames()
    {
        if($this->checkIsSuperAdmin())
        {
            return trans('Super Admin');
        }

        $roles = $this->loadMissing(['roles'])->roles;

        return implode(', ', $roles->pluck('name')->toArray());
    }
}
