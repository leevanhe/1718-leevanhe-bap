<?php

namespace App\Http\Controllers\API\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuth;

use App\Startup;

class ProfileController extends Controller
{
    public function index (request $request) {
        $data ;

        // 1. Get the auth key from the token.
        $id;
        // Get the authorization header.
        $string = $request->header('Authorization');
        // Shorten it.
        $token = substr($string, 7);
        // set the token so we can decode it later.
        JWTAuth::setToken($token);
        // Get the token again. 
        $token = JWTAuth::getToken();
        // Decode the token
        $decode = JWTAuth::decode($token)->toArray();
        // Get the auth key id from the token. aka. user identification. 
        $count = 0;
        foreach($decode as $d){
            if($count == 0){
                $id = $d;   
            }
            $count++;
        }

        // 2. Retreive all info
        $startup = Startup::where('user_id', $id)->get(['id','name']);

        // Merge all info into one pretty object.
        $data['startups'] =  $startup;

        return $data;
    }
}
