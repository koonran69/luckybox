<?php

namespace Domains\User\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Domains\Area\Models\District;
use Domains\Area\Models\Province;
use Domains\Area\Models\Ward;
use Domains\Core\Enums\Gender;
use Domains\Core\Traits\ModelTrait;
use Domains\Order\Models\Order;
use Domains\Web\Models\RewardHistory;
use Domains\Web\Models\SpinTicket;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, ModelTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'fullname',
        'email',
        'phone',
        'gender',
        'birthday',
        'password',
        'address',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'gender' => Gender::class
        ];
    }

    public function reward_history()
    {
        return $this->hasMany(RewardHistory::class, 'user_id');
    }

    public function spin_ticket()
    {
        return $this->hasMany(SpinTicket::class, 'user_id');
    }
}
