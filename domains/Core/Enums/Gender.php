<?php

namespace Domains\Core\Enums;

use Domains\Core\Supports\Enum;

enum Gender: string
{
    use Enum;

    case Male = 'Male';

    case Female = 'Female';
    
    case Other = 'Other';
}
