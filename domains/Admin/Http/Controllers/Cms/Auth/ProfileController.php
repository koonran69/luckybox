<?php

namespace Domains\Admin\Http\Controllers\Cms\Auth;

use Domains\Admin\Http\Requests\Auth\ProfileRequest;
use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Responses\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ProfileController extends Controller
{
    public function index(): View
    {
        $auth = get_auth_admin();

        return view('cms.auth.profile', [
            'auth' => $auth,
            'breadcrumb' => $this->breadcrumb()->add(__('Profile'))
        ]);
    }

    public function update(ProfileRequest $request): RedirectResponse
    {
        get_auth_admin()->update($request->validated());

        return Response::responseBack();
    }

}
