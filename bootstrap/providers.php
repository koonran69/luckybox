<?php

return [
    App\Providers\AppServiceProvider::class,

    Domains\Core\Providers\CoreServiceProvider::class,
    Domains\Core\Providers\CoreComponentServiceProvider::class,
    
    Domains\Localization\Providers\LanguageServiceProvider::class,
    Domains\Admin\Providers\AdminServiceProvider::class,

    Domains\Cms\Providers\CmsServiceProvider::class,

    Domains\Haravan\Providers\HaravanServiceProvider::class,

    Domains\Product\Providers\ProductServiceProvider::class,

    Domains\Voucher\Providers\VoucherServiceProvider::class,

    Domains\Order\Providers\OrderServiceProvider::class,

    Domains\Area\Providers\AreaServiceProvider::class,
    
    Domains\DataStore\Providers\DataStoreServiceProvider::class,

    
];
