<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Check for bearer token
Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['middleware' => ['credentials']], function () {
        //Events
        Route::resource('events', 'API\Event\EventController',['only' => ['index', 'show']] );
    });
});

Route::get('/startup/profile', 'API\Profile\ProfileController@index');

Route::post('/auth', 'API\Auth\AuthController@authenticate');