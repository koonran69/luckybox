<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::prefix('/san-pham-bien-the')->controller(Domains\Product\Http\Controllers\Cms\ProductVariantController::class)
    ->name('product_variant.')
    ->group(function () {
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
        Route::post('/sync-hrv', 'syncHrv')->name('sync_hrv');
    });

    Route::prefix('/san-pham')->controller(Domains\Product\Http\Controllers\Cms\ProductController::class)
    ->name('product.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
        Route::get('search-select', 'searchSelect')->name('search_select');
        Route::post('/sync-hrv', 'syncHrv')->name('sync_hrv');
    });

    Route::prefix('/danh-muc')->controller(Domains\Product\Http\Controllers\Cms\CategoryController::class)
    ->name('product_category.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/sync-hrv', 'syncHrv')->name('sync_hrv');
        Route::post('/store', 'store')->name('store');
        Route::put('/update', 'update')->name('update');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::delete('/delete/{id}', 'delete')->name('delete');
        Route::get('search-select', 'searchSelect')->name('search_select');
    });

    Route::prefix('/danh-gia')->controller(Domains\Product\Http\Controllers\Cms\ProductReviewController::class)
    ->name('product_review.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/edit/{id}', 'edit')->name('edit');
        Route::put('/update', 'update')->name('update');
        Route::post('/update-multiple', 'updateMultiple')->name('update_multiple');
        Route::delete('/delete/{id}', 'delete')->name('delete');
    });
});
