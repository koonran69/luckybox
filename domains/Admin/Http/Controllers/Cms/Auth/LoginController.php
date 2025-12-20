<?php

namespace Domains\Admin\Http\Controllers\Cms\Auth;

use Domains\Admin\Http\Requests\Auth\LoginRequest;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Responses\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //

    public function index(){
        return view('cms.auth.login');
    }

    public function handle(LoginRequest $request): RedirectResponse
    {
        if($this->resolve($request->validated()))
        {
            $request->session()->regenerate();
            
            return redirect()->intended(route('cms.dashboard'))->with('success', __('notifySuccess'));
        }
        return Response::responseBack(error: true, msg: __('LoginFail'));
    }

    protected function resolve($data): bool
    {
        return Auth::guard('admin')->attempt($data, true) ? true : false;
    }
}
