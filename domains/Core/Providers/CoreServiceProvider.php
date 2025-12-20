<?php

namespace Domains\Core\Providers;

use Domains\Core\Responses\ResponseMacros;
use Domains\Core\Supports\Utilities;
use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class CoreServiceProvider extends ServiceProvider
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
        $this->autoload()->loadConfig();
        
        $this->app->singleton('utilities', function ($app) {
            return new Utilities();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        ResponseMacros::register();
    }
}