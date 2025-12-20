<?php

namespace Domains\Localization\Models;

use Domains\Core\Supports\Eloquent\BaseModel;

class Currency extends BaseModel
{
    protected $table = 'currencies';

    protected $fillable = [
        'code', 'symbol', 'name', 'decimals'
    ];
}