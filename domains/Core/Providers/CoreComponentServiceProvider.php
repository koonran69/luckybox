<?php

namespace Domains\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class CoreComponentServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        Blade::component('core-alert', \Domains\Core\View\Components\Layouts\Alert::class);
        Blade::component('core-form', \Domains\Core\View\Components\Form::class);
        Blade::component('core-input', \Domains\Core\View\Components\Input\Input::class);
        Blade::component('core-input-password', \Domains\Core\View\Components\Input\InputPassword::class);
        Blade::component('core-input-email', \Domains\Core\View\Components\Input\InputEmail::class);
        Blade::component('core-input-phone', \Domains\Core\View\Components\Input\InputPhone::class);
        Blade::component('core-input-number', \Domains\Core\View\Components\Input\InputNumber::class);
        Blade::component('core-input-checkbox', \Domains\Core\View\Components\Input\InputCheckbox::class);
        Blade::component('core-input-radio', \Domains\Core\View\Components\Input\InputRadio::class);
        Blade::component('core-input-switch', \Domains\Core\View\Components\Input\InputSwitch::class);
        Blade::component('core-textarea', \Domains\Core\View\Components\Input\Textarea::class);
        Blade::component('core-select', \Domains\Core\View\Components\Select\Select::class);
        Blade::component('core-select-option', \Domains\Core\View\Components\Select\Option::class);
        Blade::component('core-input-prepended-text', \Domains\Core\View\Components\Input\InputPrependedText::class);

        //ckfinder
        Blade::component('core-input-gallery-ckfinder', \Domains\Core\View\Components\Input\InputGalleryCkfinder::class);
        Blade::component('core-input-image-ckfinder', \Domains\Core\View\Components\Input\InputImageCkfinder::class);
        Blade::component('core-input-file-ckfinder', \Domains\Core\View\Components\Input\InputFileCkfinder::class);
        
        Blade::component('core-input-filepond', \Domains\Core\View\Components\Input\InputFilePond::class);
    }
}