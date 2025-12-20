<?php

namespace Domains\Web\Models;

use Domains\Core\Enums\RewardHistoryStatus;
use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\User\Models\User;

class RewardHistory extends BaseModel
{
    protected $table = 'reward_histories';

    protected $fillable = [
        'user_id',
        'reward_id',
        'spin_ticket_id',
        'status',
        'box_position'
    ];

    protected function casts()
    {
        return [
            'status' => RewardHistoryStatus::class
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
