<?php

use Domains\Core\Supports\Helper;
use Domains\Core\Supports\Utilities;

if(function_exists('core_helper') == false)
{
    function core_helper(): Helper
    {
        return app()->make(Helper::class);
    }
}

if (! function_exists('utilities')) {
    function utilities(): Utilities {
        return app()->make(Utilities::class);
    } 
}
