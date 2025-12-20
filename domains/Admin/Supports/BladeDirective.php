<?php

namespace Domains\Admin\Supports;

use Illuminate\Support\Facades\Blade;

class BladeDirective
{
    public static function register()
    {
        Blade::if('accessroute', function (string|null $value = null) {
            return get_auth_admin()->checkEmptyRouteNameAccessOrSuperAdmin($value, true);
        });
    }
}