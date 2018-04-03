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
        $startup = Startup::where('user_id', $id)->select('id','name','description','website','avatar','employees','start')->get();
        $connections= [];
        $realisations= [];
        $recommendations= [];
        
        //TODO
        $realisations = Startup::with('realisations')->where('user_id', $id)->first()->realisations()->get(['id','name']);

        //Realisations
        //Connections
        foreach ($startup as $s) {
            $connection = $s->connections()->select('id', 'name','description')->get();
            $recommendation = $s->recommendations()->select('id', 'name','description')->get();
            $realisation = $s->realisations()->select('id', 'name','description')->get();
            
            if(Count($connection) > 0){
                $connections = $connection;
            }

            if(Count($recommendation) > 0){
                $recommendations = $recommendation;
            }

            if(Count($realisation) > 0){
                $realisations = $realisation;
            }
        }

        // Merge all info into one pretty object.
        $data['startups'] =  $startup;
        $data['connections'] =  $connections;
        $data['realisations'] =  $realisations;
        $data['recommendations'] =  $recommendations;

        return $data;
    }
}
