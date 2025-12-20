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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('position')->unique();
            $table->timestamps();
        });

        Schema::create('banner_items', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('banner_position')->index();
            $table->tinyInteger('type')->default(10);
            $table->string('title')->nullable();
            $table->text('subtitle')->nullable();
            $table->text('link')->nullable();
            $table->text('image_desktop')->nullable();
            $table->text('image_mobile')->nullable();
            $table->text('video')->nullable();
            $table->integer('position')->default(0);
            $table->timestamps();
            $table->foreign('banner_position')->on('banners')->references('position')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banner_items');
        Schema::dropIfExists('banners');
    }
};
