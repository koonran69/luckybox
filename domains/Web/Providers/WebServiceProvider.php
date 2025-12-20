<?php

namespace Domains\Web\Providers;

use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\ServiceProvider;

class WebServiceProvider extends ServiceProvider
{
    use LoadAndPublishData;

    protected $repositories = [];

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

    }
}