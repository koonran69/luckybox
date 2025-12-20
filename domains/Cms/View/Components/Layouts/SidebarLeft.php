<?php

namespace Domains\Cms\View\Components\Layouts;

use Domains\Cms\Sidebar\Menu;
use Illuminate\View\Component;

class SidebarLeft extends Component
{
    /**
     * The alert type.
     *
     * @var array
     */
    public $menu;

    public $logo;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        $this->menu = Menu::build();

        $this->logo = utilities()->getSetting('site_logo');
    }

    public function routeName($route_name, $param){
        return $route_name ? route($route_name, $param) : '#';
    }
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('cms.layouts.sidebar-left');
    }
}