<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::prefix('/nguoi-dung')->controller(Domains\User\Http\Controllers\Cms\UserController::class)
    ->name('user.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
        Route::get('search-select', 'searchSelect')->name('search_select');
    });
});
