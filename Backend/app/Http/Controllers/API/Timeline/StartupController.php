<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;

class StartupController extends Controller
{
    public function index($id)
    {
        $startup = Startup::where('id',$id)->get();

        return $startup;
    }
}
