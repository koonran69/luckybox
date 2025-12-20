<?php

namespace Domains\Blog\Models;

use Domains\Core\Enums\DefaultStatus;
use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\Core\Supports\Eloquent\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends BaseModel
{
    use HasFactory, Sluggable;

    protected $table = 'posts';

    protected $fillable = ['title', 'slug', 'is_featured',  'thumbnail', 'status', 'excerpt', 'content', 'viewed', 'meta_seo', 'posted_at'];

    protected $columnSlug = 'title';

    protected function casts(): array
    {
        return [
            'status' => DefaultStatus::class,
            'posted_at' => 'datetime',
        ];
    }

    public function comments()
    {
        return $this->hasMany(PostComment::class, 'post_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'posts_to_categories', 'post_id', 'category_id');
    }

    public function scopePublished($query)
    {
        return $query->where('status', DefaultStatus::Published);
    }

    public function scopeWFeature($q)
    {
        $q->where('is_feature', true);
    }
}
