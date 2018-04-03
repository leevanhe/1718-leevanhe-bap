<?php

namespace App\Http\Controllers\Backoffice\Test;

use App\Startup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //gets connections
        //$connections = Startup::where('id',1)->first()->connections;

        //gets description
        Startup::where('id',1)->first()->connections()->first()->posts()->select('description')->get();

        //gets connections with posts but cannot display data posts
        $connections = Startup::with('connections')->where('id',1)->first()->connections()->with('posts')->get();
        

        return view ('test.index', compact('connections'));
    }
}
