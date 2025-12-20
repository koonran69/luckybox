<?php

namespace Domains\Localization\Providers;

use Domains\Core\Traits\LoadAndPublishData;
use Illuminate\Support\ServiceProvider;

class LanguageServiceProvider extends ServiceProvider
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
        $this->autoload();
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