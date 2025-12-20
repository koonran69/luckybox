<?php

namespace Domains\Cms\Http\Controllers;

use Domains\Core\Http\Controllers\BaseController;
use Domains\Core\Supports\Breadcrumb;

class Controller extends BaseController
{
    public function breadcrumb()
    {
        $this->breadcrumb = (new Breadcrumb)->addByUrl('Dashboard', route('cms.dashboard'));

        return $this->breadcrumb;
    }
}