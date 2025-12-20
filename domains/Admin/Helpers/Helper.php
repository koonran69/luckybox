<?php

use Domains\Admin\Models\Admin;

if (! function_exists('get_auth_admin')) {
    function get_auth_admin(): Admin|null
    {
        return auth('admin')->user();
    }
}