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

        //krijgt alle connections met de posts maar return enkel maar de eerste post binnen het object posts
        $connections = Startup::where('id',$id)->first()->connections()->with('posts')->get();

        return $connections;
    }
}
