<?php

namespace Domains\Core\Supports;

use Domains\Core\Responses\TraitResponse;
use Domains\Core\Traits\EnumHelper;
use Domains\Core\Traits\Helper;
use Domains\Core\Traits\Setting;

class Utilities
{
    use TraitResponse, Setting, EnumHelper, Helper;
}