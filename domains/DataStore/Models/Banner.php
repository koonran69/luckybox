<?php

namespace Domains\DataStore\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\DataStore\Enums\BannerPosition;

class Banner extends BaseModel
{
    protected $table = 'banners';

    protected $fillable = [
        'position'
    ];

    protected function casts()
    {
        return [
            'position' => BannerPosition::class
        ];
    }

    public function items()
    {
        return $this->hasMany(BannerItem::class, 'banner_position', 'position');
    }
}
