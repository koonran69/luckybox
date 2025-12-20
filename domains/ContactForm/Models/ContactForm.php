<?php

namespace Domains\ContactForm\Models;

use Domains\ContactForm\Enums\ContactFormStatus;
use Domains\Core\Supports\Eloquent\BaseModel;

class ContactForm extends BaseModel
{
    protected $table = 'contactforms';

    protected $fillable = [
        'status',
        'fullname',
        'phone',
        'email',
        'content',
    ];

    protected function casts()
    {
        return [
            'status' => ContactFormStatus::class
        ];
    }
}
