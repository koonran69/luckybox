<?php

namespace Domains\Core\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static Domains\Core\Responses\TraitResponse responseAjax(bool $error = false, bool $show_msg = true, string|null $msg = null, $data = null, $statusCode = 200)
 * @method static Domains\Core\Responses\TraitResponse responseBack(bool $error = false, string|null $msg = null, bool $withInput = false)
 * @method static Domains\Core\Responses\TraitResponse toRoute(string $name, array|int|string|null $params = null, bool $error = false, bool $show_msg = true, string|null $msg = null)
 * @method static Domains\Core\Responses\TraitResponse handleType(bool $error = false, string $msg = null)
 * @method static Domains\Core\Traits\Setting getSetting(string $key)
 * @method static Domains\Core\Traits\EnumHelper getValueCourseFormmat(string $case)
 *
 * @see Domains\Core\Responses\TraitResponse
 * @see Domains\Core\Traits\Setting
 * @see Domains\Core\Traits\EnumHelper
 * @see Domains\Core\Traits\Helper
 */
class Utilities extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'utilities';
    }
}