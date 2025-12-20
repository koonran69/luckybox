<?php

namespace Domains\Core\Responses;

use Illuminate\Http\RedirectResponse;

class ResponseService
{
    protected $redirect = null;
    protected ?string $view = null;
    protected array $data = [];
    protected $responseAjax = null;

    public function redirect(RedirectResponse $redirect): static
    {
        $this->redirect = $redirect;
        return $this;
    }

    public function view(string $view): static
    {
        $this->view = $view;
        return $this;
    }

    public function responseAjax($responseAjax): static
    {
        $this->responseAjax = $responseAjax;
        return $this;
    }

    public function with(array $data): static
    {
        $this->data = array_merge($this->data, $data);
        return $this;
    }

    public function send()
    {
        if ($this->redirect) {
            return $this->redirect;
        }

        if ($this->view) {
            return view($this->view, $this->data);
        }

        if($this->responseAjax)
        {
            return $this->responseAjax;
        }

        return utilities()->responseAjax();
    }
}