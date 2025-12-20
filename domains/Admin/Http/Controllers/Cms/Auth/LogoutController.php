<?php

namespace Domains\Admin\Http\Controllers\Cms\Auth;

use Domains\Core\Http\Controllers\BaseController;
use Domains\Core\Responses\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LogoutController extends BaseController
{
    //
    public function logout(Request $request): RedirectResponse
    {
        auth('admin')->logout();

        $request->session()->invalidate();
 
        $request->session()->regenerateToken();

        return Response::toroute('cms.login.index', msg: __('Logout Success.'));
    }
}
