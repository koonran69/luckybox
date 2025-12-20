<?php

namespace Domains\Localization\Models;

use Domains\Core\Supports\Eloquent\BaseModel;

class Locale extends BaseModel
{
    protected $table = 'locales';

    protected $fillable = [
        'name', 'locale', 'code', 'flag', 'timezone', 'date_format', 'datetime_format'
    ];
}