<?php

namespace Domains\Core\Supports;

class Breadcrumb
{
        /**
     * Mảng chứa breadcrumb
     *
     * @var array
     */
    public array $breadcrumb = [];

    public function getbreadcrumb(): array{
        return $this->breadcrumb;
    }

    public function add(string $label, string $url = ''): Breadcrumb
    {
        $this->breadcrumb[] = [
            'label' => $label,
            'url' => $url
        ];
        return $this;
    }

    public function addByRouteName(string $label, string $route_name = ''): Breadcrumb
    {
        $this->breadcrumb[] = [
            'label' => $label,
            'url' => $route_name != '' && get_auth_admin()->checkRouteNameAccessOrSuperAdmin($route_name) ? route($route_name) : ''
        ];
        return $this;
    }

    public function addByUrl(string $label, string $url = ''): Breadcrumb
    {
        $this->breadcrumb[] = [
            'label' => $label,
            'url' => $url
        ];
        return $this;
    }
}