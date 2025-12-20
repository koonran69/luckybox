<?php

use Illuminate\Support\Facades\Route;

// Authented Admin routes
Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])
->group(function () {

    Route::get('/dashboard', [Domains\Dashboard\Http\Controllers\Cms\DashboardController::class, 'index'])->name('dashboard');

    //ckfinder
    Route::prefix('/manager-file')->name('ckfinder.')->group(function(){
        Route::any('/connect', '\CKSource\CKFinderBridge\Controller\CKFinderController@requestAction')
        ->name('connector');
        Route::any('/duyet', '\CKSource\CKFinderBridge\Controller\CKFinderController@browserAction')
        ->name('browser');
    });

});

foreach (glob(__DIR__.'/cms/*.php') as $routeFile) {
    require $routeFile;
}
