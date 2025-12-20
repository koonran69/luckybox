<?php

use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function() {

    Route::name('api')->prefix('/v1')->group(function() {
        foreach (glob(__DIR__.'/api/v1/*.php') as $routeFile)
        {
            require $routeFile;
        }
    });
    
});
