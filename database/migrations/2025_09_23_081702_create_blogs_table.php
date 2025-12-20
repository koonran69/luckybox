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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->integer('_lft');
            $table->integer('_rgt');
            $table->string('title');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('slug')->unique();
            $table->tinyInteger('status');
            $table->text('thumbnail')->nullable();
            $table->longText('content')->nullable();
            $table->text('meta_seo')->nullable();
            $table->timestamps();
            $table->foreign('parent_id')->references('id')->on('categories')->onDelete('SET NULL');
        });

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('thumbnail')->nullable();
            $table->tinyInteger('status')->nullable();
            $table->text('excerpt')->nullable();
            $table->longText('content')->nullable();
            $table->integer('viewed')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->text('meta_seo')->nullable();
            $table->dateTime('posted_at')->nullable();
            $table->timestamps();
        });

        Schema::create('post_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->foreignId('post_id')->constrained('posts')->cascadeOnDelete();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->text('content')->nullable();
            $table->json('images')->nullable();
            $table->tinyInteger('status');
            $table->timestamps();
        });

        Schema::create('posts_to_categories', function (Blueprint $table) {
            $table->foreignId('post_id');
            $table->foreignId('category_id');
            $table->primary(['post_id', 'category_id']);
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('product_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts_to_categories');
        Schema::dropIfExists('post_comments');
        Schema::dropIfExists('posts');
        Schema::dropIfExists('categories');
    }
};
