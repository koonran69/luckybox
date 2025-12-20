<?php

use Illuminate\Support\Facades\Route;

Route::middleware([Domains\Admin\Http\Middleware\AuthAdminMiddleware::class, Domains\Admin\Http\Middleware\AccessRouteNameMiddleware::class])->group(function () {
    Route::prefix('contact-form')
        ->controller(Domains\ContactForm\Http\Controllers\Cms\ContactFormController::class)
        ->name('contactform.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/create', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::put('/update', 'update')->name('update');
            Route::post('/update-multiple', 'updateMultiple')->name('update_multiple');
            Route::delete('/delete/{id}', 'delete')->name('delete');
        });
});
