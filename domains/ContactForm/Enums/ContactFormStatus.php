<?php

namespace Domains\ContactForm\Enums;

use Domains\Core\Supports\Enum;

enum ContactFormStatus: int
{
    use Enum;

    case Pending = 10;

    case Contacted = 20;

    case Spam = 30;

    public function badge(): string
    {
        return match ($this) {
            self::Pending => 'bg-yellow-lt',
            self::Contacted => 'bg-green-lt',
            self::Spam => 'bg-red-lt'
        };
    }
}