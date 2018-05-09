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

}
