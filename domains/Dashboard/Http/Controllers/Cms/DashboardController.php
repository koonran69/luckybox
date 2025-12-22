<?php

namespace Domains\Dashboard\Http\Controllers\Cms;

use Domains\Core\Http\Controllers\BaseController;

use Domains\User\Models\User;
use Illuminate\Support\Facades\Http;

class DashboardController extends BaseController
{
    public function __construct(
        public User $modelUser,
    )
    {
        
    }
    public function index()
    {
        return view('cms.dashboard.index')

        ->with('total_user', $this->modelUser->count());
    }
}