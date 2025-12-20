<?php

namespace Domains\Blog\Models;

use Domains\Core\Enums\DefaultStatus;
use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\Core\Supports\Eloquent\Sluggable;
use Kalnoy\Nestedset\NodeTrait;

class Category extends BaseModel
{
    use NodeTrait, Sluggable;

    protected $table = 'categories';

    protected $fillable = [
        '_lft',
        '_rgt',
        'title',
        'parent_id',
        'slug',
        'status',
        'thumbnail',
        'content',
        'meta_seo',
    ];

    public $columnSlug = 'title';

    protected function casts()
    {
        return [
            'status' => DefaultStatus::class
        ];
    }

    public static function getToTree(array $filter = [], array $relations = [], $sort = ['id', 'ASC'])
    {
        $query = self::applyFilters($filter);
        $query = $query->orderBy(...$sort);
        $instance = $query->withDepth()
            ->get()
            ->toTree();

        return $instance;
    }

    public static function getFlatTree(array $filter = [], array $relations = [], $sort = ['id', 'ASC'])
    {
        $query = self::applyFilters($filter);
        $query = $query->orderBy(...$sort);
        $instance = $query->withDepth()
            ->get()
            ->toFlatTree();

        return $instance;
    }
} 