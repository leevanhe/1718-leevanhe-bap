<?php

namespace App\Http\Controllers\API\Profile;

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
        $connections = Startup::with('connections')->where('id', $id)->first()->connections;
        $id = [];
       
        foreach($connections as $connection){
            array_push($id, $connection->id);
        }

        $p = Startup::whereIn('startup.id', $id)->posts()->get(
            ['pa.date as date', 'children.name as child', 'pa.type as type', 'pa.id as id', 'pa.parent_notes as note']
        );
        
        return $p;
    }
}
