<?php

namespace App\Http\Controllers\API\Timeline;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Startup;

class FriendController extends Controller
{
    public function addFriend($id, $friend_id)
    {
        $startup = Startup::where('id',$id)->first();
        $friend = Startup::find($friend_id);
        
        $addfriend = $startup->addConnection($friend);

        return $addfriend;
    }

    public function addRecommendation($id, $recommendation_id)
    {
        $startup = Startup::where('id',$id)->first();
        $recommendation = Startup::find($recommendation_id);
        
        $addrecommendation = $startup->addRecommendation($recommendation);

        return $addrecommendation;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id, $user_id) 
    {
        $connection = Startup::where('id',$user_id)->get();

        foreach ($connection as $c) {
            $confromcon = $c->connections()->select('id', 'name','description')->get();
            $recfromrec = $c->recommendations()->select('id', 'name','description')->get();
            $realisation = $c->realisations()->select('id', 'name','description')->get();
        }

        $data['connection'] = $connection;
        $data['confromcon'] = $confromcon;
        $data['recfromrec'] = $recfromrec;
        $data['realisation'] = $realisation;

        return $data;
    }

}
