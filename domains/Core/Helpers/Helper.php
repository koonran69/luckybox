<?php

use Domains\Core\Supports\Helper;
use Domains\Core\Supports\Utilities;
use Domains\Localization\Models\Language;
use Illuminate\Support\Facades\Cache;

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

if (!function_exists('available_locales')) {
    function available_locales()
    {
        return Cache::rememberForever('available_locales', function () {
            return Language::with('locale')
                ->get()
                ->map(fn ($lang) => $lang->locale->code)
                ->toArray();
        });
    }
}
if (!function_exists('available_name_locales')) {
    function available_name_locales()
    {
        return Cache::rememberForever('available_name_locales', function () {
            return Language::with('locale')
                ->get()
                ->mapWithKeys(fn ($lang) => [
                    $lang->locale->code => $lang->locale->name
                ])
                ->toArray();
        });
    }
}
if (! function_exists('locale_default')) {
    function locale_default() {
        return config('app.faker_locale_default');
    }
}

if (!function_exists('get_url_host')) {
    function get_url_host(){
        $apiHost = config('app.url', '');
        if ($apiHost != null && $apiHost !== '') {
            if (substr($apiHost, -1, 1) != '/') {
                $apiHost = $apiHost . '/';
            }
            return $apiHost;
        }
        return '';
    }
}
