<?php

namespace Domains\Core\Enums\Setting;

use Domains\Core\Supports\Enum;

enum SettingTypeInput: int
{
    use Enum;

    case Text = 10;

    case Number = 20;

    case Email = 30;

    case Phone = 40;

    case Password = 50;

    case Textarea = 60;

    case Image = 70;

    case Gallery = 80;

    case Checkbox = 90;

    case Radio = 100;
    
    case Switch = 110;
}
