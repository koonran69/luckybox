<?php

namespace Domains\Web\Models;

use Domains\Core\Enums\DefaultActive;
use Domains\Core\Supports\Eloquent\BaseModel;

class Reward extends BaseModel
{
    protected $table = 'rewards';

    protected $fillable = [
        'code',
        'image',
        'name',
        'description',
        'category',
        'display_value',
        'total_quantity',
        'remaining_quantity',
        'weight',
        'rank',
        'is_active'
    ];

    protected function casts()
    {
        return [
            'is_active' => DefaultActive::class
        ];
    }
}
