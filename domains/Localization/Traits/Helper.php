<?php

namespace Domains\Localization\Traits;

use Domains\Core\Supports\Helper as CoreHelper;
use Domains\Localization\Services\LanguageService;

trait Helper
{
    public static function formatPriceDefault($price)
    {
        return CoreHelper::formatPrice($price, LanguageService::getDefault()->currency_direction, LanguageService::getCurrencyDefault()->symbol);
    }

    public static function formatPriceCurrnet($price)
    {
        return CoreHelper::formatPrice($price, LanguageService::getCurrent()->currency_direction, LanguageService::getCurrencyCurrent()->symbol);
    }
}