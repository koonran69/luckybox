<?php

namespace Database\Seeders;

use Domains\Core\Enums\Setting\SettingGroup;
use Domains\Core\Enums\Setting\SettingTypeInput;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('settings')->truncate();

        DB::table('settings')->insert([
            [
                'setting_key' => 'site_name',
                'setting_name' => 'Tên site',
                'plain_value' => 'Site name',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::General,
                'desc' => 'Tên của website, shop, app'
            ],
            [
                'setting_key' => 'site_logo',
                'setting_name' => 'Logo',
                'plain_value' => '/assets/images/logo.png',
                'type_input' => SettingTypeInput::Image,
                'group' => SettingGroup::General,
                'desc' => 'Logo thương hiệu'
            ],

            [
                'setting_key' => 'site_favicon',
                'setting_name' => 'Favicon',
                'plain_value' => '/assets/images/logo.png',
                'type_input' => SettingTypeInput::Image,
                'group' => SettingGroup::General,
                'desc' => 'Favicon'
            ],

            [
                'setting_key' => 'contact_phone',
                'setting_name' => 'Phone',
                'plain_value' => '(+84) 09021234567',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Contact,
                'desc' => ''
            ],

            [
                'setting_key' => 'contact_email',
                'setting_name' => 'Email',
                'plain_value' => 'sales@gmail.com',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Contact,
                'desc' => ''
            ],

            [
                'setting_key' => 'contact_facebook',
                'setting_name' => 'Facebook',
                'plain_value' => '#',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Contact,
                'desc' => ''
            ],
            [
                'setting_key' => 'contact_instagram',
                'setting_name' => 'Instagram',
                'plain_value' => '#',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Contact,
                'desc' => ''
            ],
            [
                'setting_key' => 'contact_twitter',
                'setting_name' => 'Twitter',
                'plain_value' => '#',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Contact,
                'desc' => ''
            ],

            [
                'setting_key' => 'seo_title',
                'setting_name' => 'Title Seo',
                'plain_value' => '#',
                'type_input' => SettingTypeInput::Text,
                'group' => SettingGroup::Seo,
                'desc' => ''
            ],

            [
                'setting_key' => 'seo_meta',
                'setting_name' => 'Meta Seo',
                'plain_value' => '#',
                'type_input' => SettingTypeInput::Textarea,
                'group' => SettingGroup::Seo,
                'desc' => ''
            ],

            [
                'setting_key' => 'seo_thumbnail',
                'setting_name' => 'Thumbnail',
                'plain_value' => '/assets/images/logo.png',
                'type_input' => SettingTypeInput::Image,
                'group' => SettingGroup::Seo,
                'desc' => ''
            ],
        ]);
    }
}
