<?php

namespace Domains\Localization\Models;

use Domains\Core\Supports\Eloquent\BaseModel;

class Language extends BaseModel
{
    protected $table = 'languages';

    protected $fillable = [
        'locale_id', 'currency_id', 'currency_direction', 'is_default'
    ];

    public function locale()
    {
        return $this->belongsTo(Locale::class, 'locale_id');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}