<?php

namespace Domains\Localization\Services;

use Domains\Localization\Models\Currency;
use Domains\Localization\Models\Language;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class LanguageService
{
    const CACHE_ALL = 'cache_languages_all';

    const CACHE_DEFAULT = 'cache_languages_default';

    public static function applyLanguage(): void
    {
        $locale = session('locale', static::getCodeDefault());
        
        App::setLocale($locale);
    }

    public static function swichLanguage($locale = null)
    {
        $locale = static::cleanLocale($locale);

        session(['locale' => $locale]);

        return $locale;
    }

    public static function getCurrencyCurrent(): Currency
    {
        return static::getCurrent()->currency;
    }

    public static function getCurrencyDefault(): Currency
    {
        return static::getDefault()->currency;
    }

    public static function isLanguageDefault($locale)
    {
        return static::getLocaleDefault() == $locale;
    }

    public static function isLanguage($locale): bool
    {
        return in_array($locale, static::getLanguageLocales());
    }

    public static function getLocaleFromReq()
    {
        return static::cleanLocale(request('locale'));
    }

    public static function getLangCodeFromReq()
    {
        return static::cleanCode(request('lang_code'));
    }

    public static function getLocaleDefault()
    {
        return static::getDefault()->locale->locale;
    }

    public static function getCodeDefault()
    {
        return static::getDefault()->locale->code;
    }

    public static function getCurrent(): Language
    {
        return static::getLanguages()->where('locale.locale', App::currentLocale())->first();
    }

    public static function cleanLocale($locale)
    {
        $locale = static::getLanguages()->where('locale.locale', $locale)->first();

        if($locale)
        {
            return $locale->locale->locale;
        }

        return static::getDefault()->locale->locale;
    }

    public static function cleanCode($locale_code)
    {
        $code = static::getLanguages()->where('locale.code', $locale_code)->first();

        if($code)
        {
            return $code->code;
        }

        return static::getDefault()->locale->code;
    }

    public static function getLanguageLocales(): array
    {
        $locale = [];

        foreach(static::getLanguages() as $lang)
        {
            array_push($locale, $lang->locale->locale);
        }
        
        return $locale;
    }

    public static function getLanguageCodes(): array
    {
        $code = [];

        foreach(static::getLanguages() as $lang)
        {
            array_push($code, $lang->locale->code);
        }

        return $code;
    }

    public static function getLanguages()
    {
        return Cache::rememberForever(self::CACHE_ALL, function () {
            return Language::with(['locale', 'currency'])->get();
        });
    }

    public static function getDefault(): Language
    {
        return Cache::rememberForever(self::CACHE_DEFAULT, function () {
            return Language::where('is_default', true)->with(['locale', 'currency'])->first();
        });
    }
}