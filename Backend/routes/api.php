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
        //Timeline
        Route::get('/{startup_id}/timeline', 'API\Timeline\TimelineController@index');
        Route::get('/{startup_id}/timeline/userdata', 'API\Timeline\StartupController@index');

        Route::post('/{startup_id}/timeline/addfriend/{addfriend_id}', 'API\Timeline\FriendController@addFriend');
        Route::post('/{startup_id}/timeline/addrecommendation/{addrecommendation_id}', 'API\Timeline\FriendController@addRecommendation');

        Route::get('/{startup_id}/timeline/{connection_id}', 'API\Timeline\TimelineController@show');
        Route::post('/{startup_id}/timeline/create', 'API\Timeline\TimelineController@create');

        //NewPost
        Route::get('/{startup_id}/data', 'API\NewPost\NewPostController@index');

        //Matchmaking
        Route::get('/{startup_id}/matchmaking', 'API\Matchmaking\MatchmakingController@index');
        Route::get('/{startup_id}/matchmaking/{matchmaking_id}', 'API\Matchmaking\MatchmakingController@show');
        Route::post('/{startup_id}/matchmaking/create', 'API\Matchmaking\MatchmakingController@create');
    });
});

Route::post('/register', 'API\Auth\RegisterController@create');

Route::get('/startup/profile', 'API\Profile\ProfileController@index');

Route::post('/auth', 'API\Auth\AuthController@authenticate');