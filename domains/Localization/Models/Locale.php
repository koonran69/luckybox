<?php

namespace Domains\Localization\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class Locale extends BaseModel
{
    protected $table = 'locales';

    const CACHE_ALL = 'cache_locales_all';

    const CACHE_DEFAULT = 'cache_locales_default';

    protected $fillable = [
        'name', 'locale', 'code', 'flag', 'timezone', 'date_format', 'datetime_format'
    ];

    public function languages()
    {
        return $this->hasMany(Language::class);
    }

    public static function getLanguages()
    {
        return Cache::rememberForever(self::CACHE_ALL, function () {
            return self::all();
        });
    }
    public static function getDefault()
    {
        return Cache::rememberForever(self::CACHE_DEFAULT, function () {
            return Locale::where('code', App::currentLocale())->first();
        });
    }
}
