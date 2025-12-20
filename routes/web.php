<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/search-area')
->controller(Domains\Area\Http\Controllers\SearchAreaController::class)
->name('search_area.')
->group(function () {
    Route::get('/province', 'province')->name('province');
    Route::get('/district/{hrv_province_id?}', 'district')->name('district');
    Route::get('/district-by-province', 'district')->name('search_district');
    Route::get('/ward/{hrv_district_id?}', 'ward')->name('ward');
});

Route::middleware(Domains\Localization\Http\Middleware\SetLocaleMiddleware::class)->group(function() {

    Route::get('/', [Domains\Web\Http\Controllers\Home\HomeController::class, 'index'])->name('home');

    foreach (glob(__DIR__.'/web/*.php') as $routeFile) {
        require $routeFile;
    }
});