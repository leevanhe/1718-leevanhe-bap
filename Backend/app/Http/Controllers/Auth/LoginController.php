<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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


    public function index () {
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $role = Role::where('name', '=', 'admin')->first();
        if(Auth::attempt(['username' => $request->username, 'password' => $request->password], $request->remember))
        {
            if(Auth::user()->role_id == $role->id)
            {
                return redirect()->intended('/dashboard');
            } else {
                abort(404, 'Not allowed');
            }
        } else {
            return redirect()->back();
        }
    }


    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->intended('login');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
