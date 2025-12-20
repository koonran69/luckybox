<?php

return [
    'cache_name' => 'cms-role-permission-',

    'route_name_prefix' => 'cms.',

    //Loai bo cac route khong duoc ap dung
    'whitelist_routes_name' => [
        'cms.ckfinder.browser',
        'cms.ckfinder.connector',
        'cms.logout',
        'cms.password.update',
        'cms.password.change',
        'cms.profile.update',
        'cms.profile.index',
        'cms.dashboard',
        'cms.login.index',
        'cms.login.handle',
        'cms.home'
    ]
];