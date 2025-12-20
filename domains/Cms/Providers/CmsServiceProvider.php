<?php

namespace Domains\Cms\Providers;

use Domains\Cms\View\Components\Layouts\SidebarLeft;
use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class CmsServiceProvider extends ServiceProvider
{
    use LoadAndPublishData;
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
        $this->loadConfig();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        Blade::component('cms-sidebar-left', SidebarLeft::class);
    }
}