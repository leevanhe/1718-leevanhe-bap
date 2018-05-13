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
}
