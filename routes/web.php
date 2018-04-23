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

Route::get('/', 'TodoController@index');

Route::get('/todos', 'TodoController@getTodos');
Route::post('/todos', 'TodoController@postTodo');
Route::delete('/todos/{id}', 'TodoController@destroyTodo');
Route::put('/todos/{id}', 'TodoController@updateTodo');

















Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('login', ['as' => 'login', 'uses' => 'Auth\LoginController@index']);
Route::post('login', ['as' => 'login', 'uses' => 'Auth\LoginController@store']); 

Route::post('logout', ['as' => 'logout', 'uses' => 'Auth\LoginController@logout'])->middleware('auth');


Route::get('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@index']);
Route::post('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@create']); 

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/vue', function(){
    return view('vue');
});

Route::redirect('/{a}', '/home');

// Route::get('new', 'HomeController@index');    

// Route::get('users', 'UserController@index');
// Route::resource('users', 'UserController');
// Auth::routes();
