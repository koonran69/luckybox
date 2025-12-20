<?php

namespace Domains\DataStore\Enums;

use Domains\Core\Supports\Enum;

enum BannerItemType: int
{
    use Enum;

    case Image = 10;

    case Video = 20;
}
