<?php

namespace Database\Seeders;

use Domains\Admin\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Admin::create([
            'username' => 'ktech',
            'fullname' => 'K Tech Admin',
            'email' => 'admin@k-tech.net.vn',
            'status' => 1,
            'is_superadmin' => true,
            'password' => Hash::make('123456')
        ]);
    }
}
