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

// Route::get('/home', function() {
//     return view('home');
// })->middleware('auth');

Route::get('new', 'HomeController@index');    

Route::get('users', 'UserController@index');

Route::get('login', function(){
    return view('auth.login');
});

// Route::resource('users', 'UserController');
Auth::routes();

Route::post('register', 'Auth\RegisterController@create');

Route::get('/home', 'HomeController@index')->name('home');



