<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Post;
use App\Startup;
use App\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id , $post_id)
    {
        $post = Post::where('id',$post_id)->first()->comments()->with('startup')->get();
        
        return $post;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id, $post_id, Request $request)
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, $post_id)
    {
        $startup = Startup::where('id',$id)->get();
        $post = Post::where('id',$post_id)->with('startup')->get();

        $response = [
            'userdata' => $startup,
            'post' => $post
        ];

        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
