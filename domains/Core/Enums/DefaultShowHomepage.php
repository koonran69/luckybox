<?php

namespace Domains\Core\Enums;

use Domains\Core\Supports\Enum;

enum DefaultShowHomepage: int
{
    use Enum;

    case SHOW = 10;

    case HIDDEN = 20;

    public function badge()
    {
        return match($this) {
            self::SHOW => 'bg-green text-green-fg',
            self::HIDDEN => '',
        };
    }
}
