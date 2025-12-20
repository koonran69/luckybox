<?php

use Illuminate\Support\Facades\Route;

Route::middleware(Domains\Admin\Http\Middleware\GuestAdminMiddleware::class)->group(function () {
    
    Route::controller(Domains\Admin\Http\Controllers\Cms\Auth\LoginController::class)
    ->prefix('/login')
    ->name('login.')
    ->group(function() {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'handle')->name('handle');
    });
});

// Authented Admin routes
Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    //auth
    Route::controller(Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::class)
    ->prefix('/profile')
    ->name('profile.')
    ->group(function(){
        Route::get('/', 'index')->name('index');
        Route::put('/', 'update')->name('update');
    });

    Route::controller(Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::class)
    ->prefix('/password')
    ->name('password.')
    ->group(function(){
        Route::get('/', 'index')->name('change');
        Route::put('/', 'update')->name('update');
    });

    Route::post('/logout', [Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::class, 'logout'])->name('logout');
});
