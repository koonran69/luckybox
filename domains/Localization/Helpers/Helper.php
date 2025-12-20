<?php

use Domains\Localization\Services\LanguageService;
use Domains\Localization\Supports\Helper;

if(function_exists('language_helper') == false)
{
    function language_helper(): Helper
    {
        return app()->make(Helper::class);
    }
}

if(function_exists('language_service') == false)
{
    function language_service(): LanguageService
    {
        return app()->make(LanguageService::class);
    }
}
