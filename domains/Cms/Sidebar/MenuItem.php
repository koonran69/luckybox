<?php

namespace Domains\Cms\Sidebar;

class MenuItem
{
    public string $title;
    public string $route_name;
    public string $icon;
    public array $param;
    public array $sub = [];

    public function __construct(
        string $title,
        string $route_name = '',
        string $icon = '',
        array $param = [],
        array $sub = []
    ) {
        $this->title = $title;
        $this->route_name = $route_name;
        $this->icon = $icon;
        $this->param = $param;
        $this->sub = [];

        foreach ($sub as $item) {
            $this->sub[] = is_array($item) ? self::fromArray($item) : $item;
        }
    }

    public function isShow()
    {
        return get_auth_admin()->checkEmptyRouteNameAccessOrSuperAdmin($this->route_name, false, false) || 
        get_auth_admin()->checkRouteNamesAccess(array_column($this->sub, 'route_name'));
    }

    public function getUrl()
    {
        return $this->route_name ? route($this->route_name, $this->param) : '#';
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['title'] ?? '',
            $data['route_name'] ?? '',
            $data['icon'] ?? '',
            $data['param'] ?? [],
            $data['sub'] ?? []
        );
    }

    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'route_name' => $this->route_name,
            'icon' => $this->icon,
            'param' => $this->param,
            'sub' => array_map(fn($item) => $item->toArray(), $this->sub),
        ];
    }
}