<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function() {
    Route::get('/dashboard', 'Backoffice\Home\IndexController@index');
    Route::resource('/users', 'Backoffice\User\UserController');
    Route::resource('/events', 'Backoffice\Event\EventController');
    Route::resource('/test', 'Backoffice\Test\TestController');
});

Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/login', 'Auth\LoginController@index')->name('login');
Route::post('/authenticate', 'Auth\LoginController@authenticate')->name('authenticate');


