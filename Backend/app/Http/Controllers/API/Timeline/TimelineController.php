<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;
use App\Post;

class TimelineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $connections = Startup::where('id',$id)->first()->connections()->with('posts')->get();

        return $connections;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id, Request $request) 
    {
        $startup = Startup::where('id', $id)->first();

        $post = New Post;
        $post->description = $request->description;
        $post->startup_id = $startup->id;
        $post->save();

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id, $user_id) 
    {
        $connection = Startup::where('id',$id)->first()->connections()->where('connection_id',$user_id)->get();

        return $connection;
    }
}
