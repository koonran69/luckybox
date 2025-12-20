<?php

namespace Domains\Web\Models;

use Domains\Core\Supports\Eloquent\BaseModel;
use Domains\User\Models\User;

class SpinTicket extends BaseModel
{
    protected $table = 'spin_tickets';

    protected $fillable = [
        'user_id',
        'type', //register_form
        'is_used',
        'used_at',
    ];

    protected function casts()
    {
        return [
            'is_used' => 'bool',
            'used_at' => 'datetime',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
