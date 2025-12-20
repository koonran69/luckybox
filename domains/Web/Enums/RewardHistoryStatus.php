<?php

namespace Domains\Core\Enums;

use Domains\Core\Supports\Enum;

enum RewardHistoryStatus: string
{
    use Enum;

    case pending = 'pending';

    case received = 'received';

    public function badge()
    {
        return match($this) {
            self::received => 'bg-green text-green-fg',
            self::pending => '',
        };
    }
}
