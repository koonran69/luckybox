<?php

use Illuminate\Support\Facades\Route;

Route::middleware(Domains\Localization\Http\Middleware\SetLocaleMiddleware::class)->group(function() {

    Route::get('/', [Domains\Web\Http\Controllers\Home\HomeController::class, 'index'])->name('home');

    Route::post('/submit-form-participation', [Domains\Web\Http\Controllers\Home\HomeController::class, 'submitFormParticipation'])->name('submitFormParticipation');

    Route::get('/lucky-box', [Domains\Web\Http\Controllers\Home\HomeController::class, 'luckyBoxIndex'])->name('luckyBoxIndex');

    Route::post('/submit-open-box', [Domains\Web\Http\Controllers\Home\HomeController::class, 'submitOpenBox'])->name('submitOpenBox');

    foreach (glob(__DIR__.'/web/*.php') as $routeFile) {
        require $routeFile;
    }
});