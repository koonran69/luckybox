<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::prefix('/phan-thuong')->controller(Domains\Reward\Http\Controllers\Cms\RewardController::class)
    ->name('reward.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::put('/reward/{reward}/inline-update', 'inlineUpdate')->name('inlineUpdate');
    });
});
