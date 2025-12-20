<?php

namespace Domains\DataStore\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\DataStore\Enums\BannerItemType;
use Illuminate\Support\Facades\Cache;

class BannerItem extends BaseModel
{
    //
    protected $table = 'banner_items';

    protected $fillable = [
        'banner_position', 'type', 'title', 'subtitle', 'link', 'image_desktop', 'image_mobile', 'video', 'position'
    ];

    protected static function booted()
    {
        static::saved(function (BannerItem $item) {
            Cache::forget('cache_banner');
        });
    }

    protected function casts()
    {
        return [
            'type' => BannerItemType::class
        ];
    }

    public function isImage()
    {
        return $this->type == BannerItemType::Image;
    }
}
