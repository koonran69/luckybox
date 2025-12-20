<?php

namespace Domains\Core\View\Components\Input;

class InputSwitch extends Input
{
    public $label;
    public $checked;
    public $value;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($label, $checked = null, $value = '', $type = 'text', $required = false)
    {
        //
        parent::__construct($type, $required);
        $this->label = $label;
        $this->value = $value;
        $this->checked = $checked;
    }
    public function isRequired()
    {
        return $this->required === true ? [
            'required' => true, 
            'data-parsley-required-message' => __('msgValidateFieldEmpty')
        ] : [];
    }
    public function isChecked()
    {
        if(is_array($this->checked) && in_array($this->value, $this->checked))
        {
            return true;
        }

        return  $this->value == $this->checked;
    }
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.input.switch');
    }
}
