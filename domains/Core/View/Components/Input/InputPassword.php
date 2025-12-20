<?php

namespace Domains\Core\View\Components\Input;

class InputPassword extends Input
{
    public $showToggle;

    public function __construct($showToggle = false, $required = false)
    {
        //
        parent::__construct(type: 'password', required: $required);

        $this->showToggle = $showToggle;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.input.password');
    }
}
