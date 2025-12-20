<?php

namespace Domains\Blog\Providers;

use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\ServiceProvider;

class BlogServiceProvider extends ServiceProvider
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
        $this->loadConfig()->autoload();
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