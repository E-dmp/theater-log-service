<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::group([
//     'namespace' => 'App\Http\Controllers',
//     'prefix' => 'v1',
//     'middleware'=> 'auth:sanctum'
// ], function () {
//     Route::post('login',"LoginController@login");
    
// });


Route::group([
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'v1',
], function () {
    Route::apiResource('bords', BordController::class);    
});

// Route::middleware('auth:sanctum')
//     ->apiResource('login', [LoginController::class,'login']);