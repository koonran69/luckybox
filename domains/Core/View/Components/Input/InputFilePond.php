<?php

namespace Domains\Core\View\Components\Input;

use Domains\Core\Supports\Helper;

class InputFilePond extends Input
{
    public $value;

    public $name;

    public $multiple;

    public $maxFiles;
    
    public $targetFile;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($name, $value = '', $multiple = false, $maxFiles = 1, $required = false)
    {
        //
        parent::__construct('file', $required);
        $this->name = $name;
        $this->value = $value;
        $this->multiple = $multiple;
        $this->maxFiles = $maxFiles;
        $this->targetFile = Helper::uniqidReal(5);
    }

    public function marcoValue($value)
    {
        if(gettype($value) == 'object')
        {
            return $value ? implode(',', $value->toArray()) : '';
        }elseif(gettype($value) == 'array') {

            return $value ? implode(',', $value) : '';
        }elseif(gettype($value) == 'string') {
            
            return $value;
        }

        return '';
    }

    public function multiple()
    {
        if($this->multiple == true)
        {
            return "multiple data-max-files={$this->maxFiles}";
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.input.filepond');
    }
}