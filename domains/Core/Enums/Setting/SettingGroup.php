<?php

namespace Domains\Core\Enums\Setting;

use Domains\Core\Supports\Enum;

enum SettingGroup: int
{
    use Enum;

    case General = 10;

    case Contact = 20;

    case Seo = 30;

    case Home = 40;
}
