<?php

namespace Domains\Localization\Services;

use Domains\Localization\Models\Currency;
use Domains\Localization\Models\Language;
use Domains\Localization\Models\Locale;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class LanguageService
{
    const CACHE_ALL = 'cache_languages_all';

    public static function getLocaleCodeFromReq()
    {
        return static::cleanLocaleCode(request('locale_code'));
    }
    const CACHE_DEFAULT = 'cache_languages_default';

    public static function cleanLocaleCode($locale_code)
    {
        $code = static::getLanguages()->where('code', $locale_code)->first();

        if($code)
        {
            return $code->code;
        }

        return static::getDefault()->code;
    }
    public static function applyLanguage(): void
    {
        $locale = session('locale', static::getCodeDefault());

        App::setLocale($locale);
    }

    public static function switchLanguage($locale = null)
    {
        $locale = static::cleanLocaleCode($locale);

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
        return static::getDefault()->locale;
    }

    public static function getCodeDefault()
    {
        return static::getDefault()->code;
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
        return static::getLanguages()->pluck('locale')->toArray();
    }

    public static function getLanguageCodes(): array
    {
        return static::getLanguages()->pluck('code')->toArray();
    }

    public static function getLanguages(): Collection
    {
        return Locale::getLanguages();
    }

    public static function getDefault(): Locale
    {
        return Locale::getDefault();
    }
}
