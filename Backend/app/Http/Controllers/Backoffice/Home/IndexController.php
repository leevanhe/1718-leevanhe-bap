<?php

namespace App\Http\Controllers\Backoffice\Home;

use App\User;
use App\Event;
use App\Post;
use App\Startup;
use App\Services;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Charts;
use DB;
use Auth;

class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //count for topcards
        $getUsersCount = User::all()->count();
        $getEventsCount = Event::all()->count();
        $getPostsCount = Post::all()->count();
        $getServicesCount = Services::all()->count();

        //Monthly registerd users
        $users = User::where(DB::raw("(DATE_FORMAT(created_at,'%Y'))"),date('Y'))->get();
        $chart = Charts::database($users, 'area', 'highcharts')->title("Monthly new Register Users")->elementLabel("Total Users")->dimensions(0, 500)->colors(['#EC6845','#E94F43'])->responsive(true)->groupByMonth(date('Y'), true);

        //Recent users
        $getRecentUsers = Startup::orderBy('created_at', 'desc')->take(5)->get();

        //most active user

        //get users with posts
        $activeUsers = Startup::with('posts')->get();

        //latest posts
        $latestPosts = Post::orderBy('created_at', 'desc')->with('startup')->take(3)->get();

        //latest matchmakings

        //return view with data
        return view ('home.index', compact('getUsersCount', 'getEventsCount', 'getServicesCount', 'getPostsCount', 'getRecentUsers', 'latestPosts','chart'));
    }
}
