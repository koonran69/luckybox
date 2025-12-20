<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('locales')->insert([
            [
                'name' => 'English (US)',
                'locale' => 'en-US',
                'code' => 'en',
                'flag' => 'core/assets/images/flags/um.svg',
                'timezone' => 'America/New_York',
                'date_format' => 'm/d/Y',
                'datetime_format' => 'm/d/Y H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vietnamese',
                'locale' => 'vi-VN',
                'code' => 'vi',
                'flag' => 'core/assets/images/flags/vn.svg',
                'timezone' => 'Asia/Ho_Chi_Minh',
                'date_format' => 'd/m/Y',
                'datetime_format' => 'd/m/Y H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'English (UK)',
                'locale' => 'en-GB',
                'code' => 'en',
                'flag' => 'core/assets/images/flags/gb.svg',
                'timezone' => 'Europe/London',
                'date_format' => 'd/m/Y',
                'datetime_format' => 'd/m/Y H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'French',
                'locale' => 'fr-FR',
                'code' => 'fr',
                'flag' => 'core/assets/images/flags/fr.svg',
                'timezone' => 'Europe/Paris',
                'date_format' => 'd/m/Y',
                'datetime_format' => 'd/m/Y H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Japanese',
                'locale' => 'ja-JP',
                'code' => 'ja',
                'flag' => 'core/assets/images/flags/jp.svg',
                'timezone' => 'Asia/Tokyo',
                'date_format' => 'Y/m/d',
                'datetime_format' => 'Y/m/d H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Korean',
                'locale' => 'ko-KR',
                'code' => 'ko',
                'flag' => 'core/assets/images/flags/kr.svg',
                'timezone' => 'Asia/Seoul',
                'date_format' => 'Y.m.d',
                'datetime_format' => 'Y.m.d H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Chinese (Simplified)',
                'locale' => 'zh-CN',
                'code' => 'zh',
                'flag' => 'core/assets/images/flags/cn.svg',
                'timezone' => 'Asia/Shanghai',
                'date_format' => 'Y-m-d',
                'datetime_format' => 'Y-m-d H:i',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
