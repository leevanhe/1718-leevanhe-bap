<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;
use App\Post;
use App\Comment;

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

        $data = [];

        foreach($connections as $connection)
        {
            $posts = $connection->posts()->with('comments')->withCount('comments')->get();

            $obj = [];
            $obj['connection'] = $connection;
            $obj['posts'] = $posts;

            $data[] = $obj;
        }

        return $data;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createPost($id, Request $request) 
    {
        $startup = Startup::where('id', $id)->first();

        $post = New Post;
        $post->description = $request->description;
        $post->startup_id = $startup->id;
        $post->save();

    }

    public function createComment($id, $post_id, Request $request)
    {
        $startup = Startup::where('id', $id)->first();
        $post = Post::where('id', $post_id)->first();

        $comment = new Comment;
        $comment->description = $request->description;
        $comment->post_id = $post->id;
        $comment->startup_id = $startup->id;
        $comment->save();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showUser($id, $user_id) 
    {
        $connection = Startup::where('id',$id)->first()->connections()->where('connection_id',$user_id)->with('connections')->get();

        return $connection;
    }

    public function showComments($id , $post_id)
    {
        $post = Post::where('id',$post_id)->first()->comments()->with('startup')->get();
        
        return $post;
    }
}
