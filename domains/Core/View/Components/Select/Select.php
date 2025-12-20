<?php

namespace Domains\Core\View\Components\Select;

use Domains\Core\View\Components\Input\Input;

class Select extends Input
{
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.select');
    }
}
