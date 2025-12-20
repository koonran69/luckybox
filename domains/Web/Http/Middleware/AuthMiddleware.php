<?php

namespace Domains\Web\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Perform action
        if (Auth::check())
        {
            return $next($request);
        }

        return redirect()->guest(route('login.index'))->with('error', __('pleaseLoginHandle'));
    }
}