<?php

namespace Domains\Web\Enums;

use Domains\Core\Supports\Enum;

enum RewardCategory: string
{
    use Enum;

    case physical = 'physical';

    case virtual = 'virtual';
    case message = 'message';
}
