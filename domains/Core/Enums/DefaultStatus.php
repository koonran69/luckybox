<?php

namespace Domains\Core\Enums;

use Domains\Core\Supports\Enum;

enum DefaultStatus: int
{
    use Enum;

    case Published = 10;

    case Draft = 20;

    public function badge()
    {
        return match($this) {
            self::Published => 'bg-green text-green-fg',
            self::Draft => '',
        };
    }
}
