<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'v1',
], function () {
    Route::apiResource('bords', BordController::class);
});


// ログイン状態じゃないとroute list の起動不可
// Route::middleware('auth:sanctum')
//     ->apiResource('users.bords', BordController::class)
//     ->only('store');