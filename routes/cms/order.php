<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::prefix('/don-hang')->controller(Domains\Order\Http\Controllers\Cms\OrderController::class)
        ->name('order.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/create', 'create')->name('create');
            Route::get('/export-excel', 'exportExcel')->name('export_excel');
            Route::post('/store', 'store')->name('store');
            Route::put('/update', 'update')->name('update');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::delete('/delete/{id}', 'delete')->name('delete');
        });
});
