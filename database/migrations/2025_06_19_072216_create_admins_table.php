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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->char('username', 100)->unique();
            $table->string('fullname')->nullable();
            $table->char('phone', 20)->unique()->nullable();
            $table->char('email', 100)->unique()->nullable();
            $table->date('birthday')->nullable();
            $table->char('gender', 20)->nullable();
            $table->text('avatar')->nullable();
            $table->tinyInteger('status');
            $table->boolean('is_superadmin')->default(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->json('access_route_names')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->json('route_names');
            $table->timestamps();
        });

        Schema::create('role_has_permissions', function (Blueprint $table) {
            $table->unsignedBigInteger('role_id');
            $table->unsignedBigInteger('permission_id');
            $table->primary(['role_id', 'permission_id']);
            $table->timestamps();
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade');
        });

        Schema::create('admin_has_permissions', function (Blueprint $table) {
            $table->unsignedBigInteger('admin_id');
            $table->unsignedBigInteger('permission_id');
            $table->primary(['admin_id', 'permission_id']);
            $table->timestamps();
            $table->foreign('admin_id')->references('id')->on('admins')->onDelete('cascade');
            $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade');
        });

        Schema::create('admin_has_roles', function (Blueprint $table) {
            $table->unsignedBigInteger('admin_id');
            $table->unsignedBigInteger('role_id');
            $table->primary(['admin_id', 'role_id']);
            $table->timestamps();
            $table->foreign('admin_id')->references('id')->on('admins')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin_has_roles');
        Schema::dropIfExists('admin_has_permissions');
        Schema::dropIfExists('role_has_permissions');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('admins');
    }
};
