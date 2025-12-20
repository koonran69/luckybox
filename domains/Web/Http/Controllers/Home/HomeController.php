<?php

namespace Domains\Web\Http\Controllers\Home;

use Domains\Web\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('home/Index', [
            'breadcrumbs' => $this->breadcrumb()->add(trans('Xin chào'))->getbreadcrumb()
        ]);
    }
}