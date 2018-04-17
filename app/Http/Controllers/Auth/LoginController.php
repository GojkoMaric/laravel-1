<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function index()
    {
        return view('auth.login');
    }

    public function store()
    {
        $user = User::where('email', request('email'));
        if(!$user)
        {
            return back()->withErrors(['message' => 'Please verify your account.']);
        }
        if(!auth()->attempt(
            request(['email', 'password'])
        )){
            return back()->withErrors([
                'message' => 'Bad credentials. Please try again.'
            ]);
        }
        return redirect('/home');
    }

    public function logout()
    {
        auth()->logout();
        return redirect('/home');
    }
}
