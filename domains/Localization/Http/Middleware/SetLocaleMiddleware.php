<?php

namespace Domains\Localization\Http\Middleware;

use Closure;
use Domains\Localization\Services\LanguageService;

class SetLocaleMiddleware
{
    public function handle($request, Closure $next)
    {
        LanguageService::applyLanguage();

        return $next($request);
    }
}
