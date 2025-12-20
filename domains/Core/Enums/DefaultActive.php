<?php

namespace Domains\Core\Enums;

use Domains\Core\Supports\Enum;

enum DefaultActive: int
{
    use Enum;

    case Active = 10;

    case UnActive = 20;

    public function badge()
    {
        return match($this) {
            self::Active => 'bg-green text-green-fg',
            self::UnActive => '',
        };
    }
}
