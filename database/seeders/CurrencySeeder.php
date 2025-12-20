<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('currencies')->insert([
            [
                'code' => 'USD',
                'symbol' => '$',
                'name' => 'US Dollar',
                'decimals' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'VND',
                'symbol' => '₫',
                'name' => 'Vietnamese Dong',
                'decimals' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'EUR',
                'symbol' => '€',
                'name' => 'Euro',
                'decimals' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'GBP',
                'symbol' => '£',
                'name' => 'British Pound',
                'decimals' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'JPY',
                'symbol' => '¥',
                'name' => 'Japanese Yen',
                'decimals' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'KRW',
                'symbol' => '₩',
                'name' => 'South Korean Won',
                'decimals' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CNY',
                'symbol' => '¥',
                'name' => 'Chinese Yuan',
                'decimals' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
