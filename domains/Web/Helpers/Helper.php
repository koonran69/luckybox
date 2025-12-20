<?php

use Domains\Users\Models\User;
use Illuminate\Support\Facades\Auth;

if (! function_exists('get_auth_user')) {
    function get_auth_user(): User|null
    {
        return Auth::user();
    }
}