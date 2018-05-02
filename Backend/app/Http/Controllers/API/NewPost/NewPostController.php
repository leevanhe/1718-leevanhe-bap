<?php

namespace App\Http\Controllers\API\NewPost;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;
use App\Post;

class NewPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $startup = Startup::all();

        return $startup;
    }
}
