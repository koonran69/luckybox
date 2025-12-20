<?php

namespace Database\Seeders;

use Domains\DataStore\Enums\BannerPosition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $arr = [];

        foreach(BannerPosition::asSelectArray() as $key => $value)
        {
            $arr[] = [
                'position' => $key
            ];
        }

        DB::table('banners')->insert($arr);
    }
}
