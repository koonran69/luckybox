<?php

namespace Domains\Core\Traits;

use Domains\Core\Models\Setting as ModelsSetting;

trait Setting
{
    public function getSetting(string $key)
    {
        return ModelsSetting::getValue($key);
    }

    public function getAll()
    {
        return ModelsSetting::all()->mapWithKeys(fn($item) => [$item->setting_key => $item->plain_value]);
    }
}