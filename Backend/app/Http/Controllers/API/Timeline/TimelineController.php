<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;

class TimelineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $connections = Startup::where('id',$id)->first()->connections;

        foreach($connections as $c) {
            $post = $c->posts()->get();

            if(Count($post) > 0){
                $posts = $post;
            }
        }

        return $posts;
    }
}
