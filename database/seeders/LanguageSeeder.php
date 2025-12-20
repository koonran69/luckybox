<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $mappings = [
            ['locale' => 'en-US', 'currency' => 'USD', 'direction' => 'left'],
            ['locale' => 'vi-VN', 'currency' => 'VND', 'direction' => 'right', 'is_default' => true],
            ['locale' => 'en-GB', 'currency' => 'GBP', 'direction' => 'left'],
            ['locale' => 'fr-FR', 'currency' => 'EUR', 'direction' => 'right'],
            ['locale' => 'ja-JP', 'currency' => 'JPY', 'direction' => 'left'],
            ['locale' => 'ko-KR', 'currency' => 'KRW', 'direction' => 'right'],
            ['locale' => 'zh-CN', 'currency' => 'CNY', 'direction' => 'left'],
        ];

        foreach ($mappings as $item) {
            $locale = DB::table('locales')->where('locale', $item['locale'])->first();
            $currency = DB::table('currencies')->where('code', $item['currency'])->first();

            if ($locale && $currency) {
                DB::table('languages')->insert([
                    'locale_id' => $locale->id,
                    'currency_id' => $currency->id,
                    'currency_direction' => $item['direction'],
                    'is_default' => $item['is_default'] ?? false,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
