<?php

namespace App\Http\Middleware;

use Symfony\Component\HttpKernel\Exception\HttpException;
use Closure;
use App\Startup;
use JWTAuth;
class Credentials
{
    private $id;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

     /**
      * 
      * TODO aparte middelware. voor meerdere zoekopdrachten. 
      */
    public function handle($request, Closure $next)
    {   
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
                $this->id = $d;   
            }
            $count++;
        }
        $parameters = $request->route()->parameters();
        $keys = array_keys($parameters);
        foreach( $keys as $key){
            if($key == 'startup_id'){
                $startups = Startup::where('user_id', $this->id)->first();
                if($request->route('startup_id') == $startups->id){
                    return $next($request);
                } else {
                    abort(403, 'Unauthorized action.');
                }
            }
        }
    }
}

