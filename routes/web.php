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

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', ['as' => 'login', 'uses' => 'Auth\LoginController@index']);
Route::post('login', ['as' => 'login', 'uses' => 'Auth\LoginController@store']); 
Route::post('logout', ['as' => 'logout', 'uses' => 'Auth\LoginController@logout']);

Route::get('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@index']);
Route::post('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@create']); 

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('new', 'HomeController@index');    

// Route::get('users', 'UserController@index');
// Route::resource('users', 'UserController');
// Auth::routes();
