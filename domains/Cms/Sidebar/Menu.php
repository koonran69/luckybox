<?php

namespace Domains\Cms\Sidebar;

class Menu
{
    public static function getData()
    {
        $data = include __DIR__ . '/MenuData.php';

        return $data;
    }

    public static function build()
    {
        $items = [];

        foreach(static::getData() as $item)
        {
            $items[] = MenuItem::fromArray($item);
        }

        return $items;
    }
}