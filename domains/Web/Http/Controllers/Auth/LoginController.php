<?php

namespace Domains\Web\Http\Controllers\Auth;

use Domains\Web\Http\Controllers\Controller;
use Domains\Web\Http\Requests\LoginRequest;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/Login');
    }

    public function handle(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('home', absolute: false));

    }
}