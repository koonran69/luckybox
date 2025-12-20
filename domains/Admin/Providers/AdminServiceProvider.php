<?php

namespace Domains\Admin\Providers;

use Domains\Admin\Supports\BladeDirective;
use Domains\Core\Models\Setting;
use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider
{
    use LoadAndPublishData;

    protected $repositories = [
        'Domains\Admin\Repositories\Admin\AdminRepositoryInterface' => 'Domains\Admin\Repositories\Admin\AdminRepository',
        'Domains\Admin\Repositories\Permission\PermissionRepositoryInterface' => 'Domains\Admin\Repositories\Permission\PermissionRepository',
        'Domains\Admin\Repositories\Role\RoleRepositoryInterface' => 'Domains\Admin\Repositories\Role\RoleRepository'
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
        $this->autoload();

        foreach ($this->repositories as $interface => $implement) {
            $this->app->singleton($interface, $implement);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        BladeDirective::register();
    }
}