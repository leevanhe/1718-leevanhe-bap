<?php

namespace App\Http\Controllers\Backoffice\User;

use App\User;
use App\Startup;
use App\Adresses;
use App\Role;
use Session;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $startups = Startup::all(); 
        return view('user.index', compact('startups'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::all();

        return view('user.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate
        $rules = [
            //user
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',

            //adress
            'line1' => 'required|string',
            'city' => 'required|string',
            'ZIP' => 'required|numeric|digits_between:3,9',
            'country' => 'required|string',

            //startup
            'name' => 'required|string',
            'description' => 'required',
            'website' => 'required|url',
            'employees' => 'required|numeric',
            'start' => 'required|date|after:2015-01-01',
        ];

        $this->validate($request, $rules);

        //create
        $role = Role::where('name', 'admin')->first();
        
        $user = new User;
        $user->username = $request->username;
        $user->password = bcrypt($request->password);
        $user->verified = User::UNVERIFIED_USER;
        $user->verification_token = User::generateVerificationToken();
        $user->role_id = $role->id;
        $user->save();

        $adress = new Adresses;
        $adress->line1 = $request->line1;
        $adress->city = $request->city;
        $adress->ZIP = $request->ZIP;
        $adress->country = $request->country;
        $adress->save();
        
        $startup = new startup;
        $startup->name = $request->name;
        $startup->description = $request->description;
        $startup->website = $request->website;
        $startup->image = $request->image;
        $startup->employees = $request->employees;
        $startup->start = $request->start;

        //belongsto
        $startup->adresses()->associate($adress);
        $startup->user()->associate($user);
        //hasone
        $user->startup()->save($startup);

        $startup->save();

        //redirect
        Session::flash('succes', 'The user was succesfully saved!');

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $startup = Startup::find($id);
        $realisations = Startup::find($id)->realisations;
        $services = Startup::find($id)->services;

        return view('user.show', compact('startup', 'realisations', 'services'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $startup = Startup::find($id);

        return view('user.edit', compact('startup'));
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
