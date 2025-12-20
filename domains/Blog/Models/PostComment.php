<?php

namespace Domains\Blog\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\Product\Enums\ReviewStatus;
use Domains\User\Models\User;

class PostComment extends BaseModel
{
    protected $table = 'post_comments';

    protected $fillable = ['user_id', 'post_id', 'name',  'email', 'content', 'images', 'status'];


    protected function casts(): array
    {
        return [
            'status' => ReviewStatus::class,
        ];
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
