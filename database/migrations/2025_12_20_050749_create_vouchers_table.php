<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //Bảng phần thưởng
        Schema::create('rewards', function (Blueprint $table) {
            $table->id();
            // Loại phần thưởng
            $table->string('code')->unique(); // VD: FIRST_PRIZE_GOLD, SECOND_PRIZE_CAMERA, LUCKY_MESSAGE
            $table->string('image')->nullable()->comment('Hình ảnh phần thưởng (url hoặc path)');
            $table->string('image_home')->nullable()->comment('Hình ảnh phần thưởng (url hoặc path)');
            $table->string('name');            // Tên giải
            $table->text('description')->nullable(); // Mô tả chi tiết
            // Phân loại: physical: quà hiện vật, virtual: cơ hội quay / voucher, message: lời chúc
            $table->string('category')->comment('physical|virtual|message');
            // Giá trị hiển thị (không dùng cho logic)
            $table->string('display_value')->nullable(); // VD: "02 chỉ vàng", "1.890.000 VNĐ"
            // Số lượng
            $table->integer('total_quantity')->default(0);   // Tổng giải (-1 là không giới hạn)
            $table->integer('remaining_quantity')->default(0); // Còn lại (-1 là không giới hạn)
            // Tỉ lệ
            $table->integer('weight')->default(1); // Tỉ lệ quay (Tỉ lệ (%) = weight / tổng_weight × 100)
            // Thứ hạng
            $table->integer('rank')->nullable(); // 1 = giải nhất, 2 = giải nhì
            // Trạng thái
            $table->tinyInteger('is_active')->default(\Domains\Core\Enums\DefaultActive::Active);
            $table->timestamps();
        });
        //Người dùng điền form xong sẽ được 1 lần mở box
        Schema::create('spin_tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->string('type')->default('register_form');//Loại nhận (chỉ có register_form)
            $table->boolean('is_used')->default(false);
            $table->timestamp('used_at')->nullable();
            $table->timestamps();
        });

        //Bảng list thưởng tạo ra dựa trên tỉ lệ cũng là Lịch sử trúng
        Schema::create('reward_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->foreignId('reward_id')->constrained('rewards');
            $table->foreignId('spin_ticket_id')->constrained('spin_tickets'); // Lưu lại để biết lượt quay nào sinh ra quà này
            $table->string('status')->default('pending')->comment('pending|received'); // Trạng thái trao quà
            $table->json('reward')->nullable(); //lưu thông tin reward
            $table->integer('box_position')->nullable(); //vị trí box mở (1-9)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voucher_list');
    }
};
