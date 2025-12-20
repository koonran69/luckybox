<?php

namespace Domains\Core\Models;

use Domains\Core\Enums\Setting\SettingGroup;
use Domains\Core\Enums\Setting\SettingTypeInput;
use Domains\Core\Supports\Eloquent\BaseModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Setting extends BaseModel
{
    use HasFactory;

    const CACHE_KEY_GET_ALL = 'cache_settings';

    protected $table = 'settings';

    protected $fillable = [
        'setting_key',
        'setting_name',
        'plain_value',
        'desc',
        'type_input',
        'type_data',
        'group'
    ];

    protected $casts = [
        'type_input' => SettingTypeInput::class,
        'group' => SettingGroup::class
    ];

    public function getNameComponent()
    {
        return match($this->type_input){
            SettingTypeInput::Text => 'core-input',
            SettingTypeInput::Number => 'core-input-number',
            SettingTypeInput::Image => 'core-input-image-ckfinder',
            SettingTypeInput::Email => 'core-input-email',
            SettingTypeInput::Phone => 'core-input-phone',
            SettingTypeInput::Switch => 'core-input-switch',
            SettingTypeInput::Textarea => 'core-textarea',
            default => 'core-input'
        };
    }

    public static function getInputSwitch(Collection $collection)
    {
        $inputSwitch = $collection->where('type_input', SettingTypeInput::Switch)->map((fn($item) => $item->setting_key))->toArray();

        return $inputSwitch;
    }

    public function isInputSwitch()
    {
        return $this->type_input == SettingTypeInput::Switch;
    }

    public static function getAll()
    {
        return Cache::rememberForever(self::CACHE_KEY_GET_ALL, function () {

            return self::all()->pluck('plain_value', 'setting_key');
        });
    }

    public static function getValue(string $key)
    {
        return self::getAll()->get($key, '');
    }

    public static function updateMultipleRecord(array $data){

        Cache::forget(Setting::CACHE_KEY_GET_ALL);

        $query = "UPDATE settings SET plain_value = CASE setting_key ";

        foreach ($data as $key => $value) {
            $query .= "WHEN '{$key}' THEN '{$value}' ";
        }

        $query .= "END WHERE setting_key IN ('".implode("', '", array_keys($data))."')";

        return DB::update($query);
    }
}