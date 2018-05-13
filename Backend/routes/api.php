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
        //Timeline page
        Route::get('/{startup_id}/timeline', 'API\Timeline\TimelineController@index');

        //New post
        Route::get('/{startup_id}/timeline/userdata', 'API\Timeline\StartupController@index');
        Route::post('/{startup_id}/timeline/create', 'API\Timeline\PostController@create');

        //Detail friend
        Route::get('/{startup_id}/timeline/friend/{connection_id}', 'API\Timeline\FriendController@show');
        Route::post('/{startup_id}/timeline/addfriend/{addfriend_id}', 'API\Timeline\FriendController@addFriend');
        Route::post('/{startup_id}/timeline/addrecommendation/{addrecommendation_id}', 'API\Timeline\FriendController@addRecommendation');

        //Detail comment
        Route::get('/{startup_id}/timeline/post/{post_id}/comment', 'API\Timeline\CommentController@index');

        //New comment
        Route::get('/{startup_id}/timeline/post/{post_id}/comment/data', 'API\Timeline\CommentController@show');
        Route::post('/{startup_id}/timeline/post/{post_id}/comment/create', 'API\Timeline\CommentController@create');

        //Matchmaking
        Route::get('/{startup_id}/matchmaking', 'API\Matchmaking\MatchmakingController@index');
        Route::get('/{startup_id}/matchmaking/{matchmaking_id}', 'API\Matchmaking\MatchmakingController@show');
        Route::post('/{startup_id}/matchmaking/create', 'API\Matchmaking\MatchmakingController@create');
    });
});

Route::post('/register', 'API\Auth\RegisterController@create');

Route::get('/startup/profile', 'API\Profile\ProfileController@index');

Route::post('/auth', 'API\Auth\AuthController@authenticate');