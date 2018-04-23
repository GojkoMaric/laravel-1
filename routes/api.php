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

Route::group(['middleware' => 'cors'], function() {
    Route::get('/', 'TodoController@index');

    Route::get('/todos', 'TodoController@getTodos');
    Route::post('/todos', 'TodoController@postTodo');
    Route::delete('/todos/{id}', 'TodoController@destroyTodo');
    Route::put('/todos/{id}', 'TodoController@updateTodo');
});
