<?php

namespace Domains\Web\Models;

use Domains\Web\Enums\RewardHistoryStatus;
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

    protected $casts = [
        'status' => RewardHistoryStatus::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function rewarded(){
        return $this->hasOne(Reward::class, 'id','reward_id');
    }

    public function reward(){
        return $this->belongsTo(Reward::class, 'reward_id');
    }

    public function spin_ticket(){
        return $this->belongsTo(SpinTicket::class, 'spin_ticket_id');
    }
}
