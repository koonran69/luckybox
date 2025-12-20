<?php

namespace Domains\Web\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class GuestMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Perform action
        if (Auth::guest())
        {
            return $next($request);
        }

        return to_route('home');
    }
}