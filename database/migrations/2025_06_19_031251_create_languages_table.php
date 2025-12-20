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
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();   // ví dụ: USD, VND
            $table->string('symbol');           // $, ₫
            $table->string('name');             // US Dollar, Vietnamese Dong
            $table->integer('decimals')->default(0); // số chữ số thập phân
            $table->timestamps();
        });

        Schema::create('locales', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->char('locale')->unique();
            $table->char('code');
            $table->text('flag')->nullable();
            $table->string('timezone')->nullable();
            $table->string('date_format')->default('d/m/Y');
            $table->string('datetime_format')->default('d/m/Y H:i');
            $table->timestamps();
        });

        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('locale_id')->nullable()->constrained('locales', 'id')->nullOnDelete();
            $table->foreignId('currency_id')->nullable()->constrained('currencies', 'id')->nullOnDelete();
            $table->enum('currency_direction', ['left', 'right'])->default('left');
            $table->boolean('is_default')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('currencies');
        Schema::dropIfExists('locales');
        Schema::dropIfExists('languages');
    }
};
