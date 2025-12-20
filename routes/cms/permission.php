<?php

use Illuminate\Support\Facades\Route;

// Authented Admin routes
Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {
    //Manager role admin
    Route::prefix('/role')->controller(Domains\Admin\Http\Controllers\Cms\Role\RoleController::class)
    ->name('role.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
    });

    //Manager permission admin
    Route::prefix('/permission')->controller(Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::class)
    ->name('permission.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
    });
});