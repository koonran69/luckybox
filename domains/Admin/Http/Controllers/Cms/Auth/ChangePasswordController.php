<?php

namespace Domains\Admin\Http\Controllers\Cms\Auth;

use Domains\Admin\Http\Requests\Auth\ChangePasswordRequest;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Responses\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ChangePasswordController extends Controller
{
    public function index(): View
    {
        return view('cms.auth.change-password', [
            'breadcrumb' => $this->breadcrumb()->add(__('Đổi mật khẩu'))
        ]);
    }

    public function update(ChangePasswordRequest $request): RedirectResponse
    {
        get_auth_admin()->update([
            'password' => bcrypt($request->input('password'))
        ]);
        
        return Response::responseBack();
    }
}
