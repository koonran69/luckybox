<?php

use Domains\Core\Enums\Setting\SettingGroup;
use Illuminate\Support\Facades\Route;

// Authented Admin routes
Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
    ->group(function () {

    //Settings
    Route::controller(Domains\Setting\Http\Controllers\Cms\SettingController::class)
    ->prefix('/settings')
    ->as('setting.')
    ->group(function () {
        Route::get('/index/{group}', 'index')->name('index')->whereIn('group', SettingGroup::cases());
        Route::put('/update', 'update')->name('update');

    });
});
