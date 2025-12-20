<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::prefix('/banner')->controller(Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::class)
    ->name('banner.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');

        Route::prefix('/items')->controller(Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::class)
        ->name('item.')
        ->group(function () {
            Route::get('/{banner_position}', 'index')->name('index');
            Route::get('/create/{banner_position}', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::put('/update', 'update')->name('update');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::delete('/delete/{id}', 'delete')->name('delete');
        });

    });
});
