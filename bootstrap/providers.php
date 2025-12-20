<?php

return [
    App\Providers\AppServiceProvider::class,

    Domains\Core\Providers\CoreServiceProvider::class,
    Domains\Core\Providers\CoreComponentServiceProvider::class,
    
    Domains\Localization\Providers\LanguageServiceProvider::class,
    Domains\Admin\Providers\AdminServiceProvider::class,

    Domains\Cms\Providers\CmsServiceProvider::class,

    Domains\DataStore\Providers\DataStoreServiceProvider::class,

    Domains\Web\Providers\WebServiceProvider::class,

    
];
