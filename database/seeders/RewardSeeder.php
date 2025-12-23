<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RewardSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('rewards')->delete();

        $now = Carbon::now();

        $rewards = [
            [
                'code' => 'FIRST_PRIZE_GOLD',
                'image' => '/assets/images/reward-vang-full.png',
                'image_home' => '/assets/images/reward-gold.png',
                'name' => 'Giải Nhất – 02 chỉ vàng',
                'description' => '1000 cơ hội quay trúng thưởng chỉ vàng – 02 chỉ vàng SJC',
                'category' => 'physical',
                'display_value' => '02 chỉ vàng',
                'total_quantity' => 1,
                'remaining_quantity' => 1,
                'weight' => 1,
                'rank' => 1,
                'is_active' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'code' => 'SECOND_PRIZE_CAMERA',
                'image' => '/assets/images/reward-may-anh-full.png',
                'image_home' => '/assets/images/reward-instax-mini-12.png',
                'name' => 'Giải Nhì – Máy ảnh Fujifilm Instax Mini',
                'description' => '01 Máy ảnh Fujifilm Instax Mini',
                'category' => 'physical',
                'display_value' => '1.890.000 VNĐ',
                'total_quantity' => 5,
                'remaining_quantity' => 5,
                'weight' => 5,
                'rank' => 2,
                'is_active' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'code' => 'THIRD_PRIZE_MIBAND',
                'image' => '/assets/images/reward-dong-ho-full.png',
                'image_home' => '/assets/images/reward-mi-band-10.png',
                'name' => 'Giải Ba – Xiaomi Mi Band 10',
                'description' => '01 Đồng hồ thông minh Xiaomi - Mi Band 10',
                'category' => 'physical',
                'display_value' => '1.170.000 VNĐ',
                'total_quantity' => 10,
                'remaining_quantity' => 10,
                'weight' => 10,
                'rank' => 3,
                'is_active' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'code' => 'CONSOLATION_PILLOW',
                'image' => '/assets/images/reward-goi-full.png',
                'image_home' => '/assets/images/reward-u-pillow.png',
                'name' => 'Giải Khuyến Khích – Gối chữ U Bamozo',
                'description' => '01 Gối chữ U Bamozo',
                'category' => 'physical',
                'display_value' => 'Gối chữ U Bamozo',
                'total_quantity' => 100,
                'remaining_quantity' => 100,
                'weight' => 50,
                'rank' => 4,
                'is_active' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'code' => 'LUCKY_MESSAGE',
                'image' => '/assets/images/reward-loi-chuc-full.png',
                'image_home' => null,
                'name' => 'Nhận lời chúc may mắn',
                'description' => 'Hành trình mang Tết về nhà của bạn vẫn tiếp tục ✨ Khám phá thêm các mẫu vali Bamozo để gói trọn những chuyến đi sắp tới nhé!',
                'category' => 'message',
                'display_value' => null,
                'total_quantity' => -1,
                'remaining_quantity' => -1,
                'weight' => 200,
                'rank' => null,
                'is_active' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        DB::table('rewards')->insert($rewards);
    }
}
