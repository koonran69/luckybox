<?php

namespace Domains\Web\Http\Controllers;

use Domains\Core\Http\Controllers\BaseController;
use Domains\Core\Supports\Breadcrumb;

class Controller extends BaseController
{
    public function breadcrumb()
    {
        $this->breadcrumb = (new Breadcrumb)->addByUrl(trans('Trang chủ'), route('home'));

        return $this->breadcrumb;
    }
}