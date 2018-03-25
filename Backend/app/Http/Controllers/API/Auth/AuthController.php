<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Response;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWT;
use Tymon\JWTAuth\JWTGuard;
use App\User;
use App\Startup;
use App\Adresses;
use Carbon\Carbon;

class AuthController extends Controller
{
 /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        // Take the credentials
        $user = User::where('username', '=', $request['username'])->first();

        if($user != null){
            // Check is password is valid.
            if (password_verify($request['password'], $user['password'])) {

                $token = JWTAuth::fromUser($user);

                // return token and startup id for later use.  
                $startup = Startup::where('user_id', '=', $user->id)->first();
                
                $response = [
                    "token" => $token,
                    "startup" => $startup->id,
                ];

                return $response;

            } else {
                abort(403, 'Invalid password'); 
            }
        } else {
            abort(403, 'User doesnt exist'); 
        }
    }
}
