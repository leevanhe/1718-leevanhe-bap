<?php

namespace App\Http\Controllers\Backoffice\User;

use App\User;
use App\Startup;
use App\Adresses;
use App\Role;
use Session;
use Image;
use App\Http\Requests\UpdateStartup;
use App\Http\Requests\CreateStartup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        if($name = $request->input('name')) {
            $startups= Startup::where('name', 'like', '%' . $name . '%')->paginate(15);
        }
        else{
            $startups = Startup::paginate(15);
        } 

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
    public function store(CreateStartup $request)
    {

        //Create
        if($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save(public_path('/assets/img/uploads/avatar/'.$filename));

            //TODO
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
            $startup->avatar = $filename;
            $startup->website = $request->website;
            $startup->employees = $request->employees;
            $startup->start = $request->start;

            $startup->adresses()->associate($adress);
            $startup->user()->associate($user);

            $startup->save();
        }

        //Redirect
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
        $categories = Startup::find($id)->categories;
        $connections = Startup::find($id)->connections;
        $recommendations = Startup::find($id)->recommendations;
        $realisations = Startup::find($id)->realisations;
        $services = Startup::find($id)->services;

        return view('user.show', compact('startup', 'realisations', 'services', 'categories', 'recommendations', 'connections'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $startup = Startup::info()->find($id);

        return view('user.edit', compact('startup'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateStartup $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStartup $request, $id)
    {
        //Update
        if($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save(public_path('/assets/img/uploads/avatar/'.$filename));

            $startup = Startup::find($id);
            $startup->name = $request->name;
            $startup->description = $request->description;
            $startup->avatar = $filename;
            $startup->website = $request->website;
            $startup->employees = $request->employees;
            $startup->start = $request->start;
            $startup->save();

            $user = $startup->user;
            $user->save();

            $adress = $startup->adresses;
            $adress->line1 = $request->line1;
            $adress->city = $request->city;
            $adress->ZIP = $request->ZIP;
            $adress->country = $request->country;
            $adress->save();     
        }

        //Redirect
        Session::flash('succes', 'The user was succesfully saved!');

        return redirect()->route('users.show', $startup->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $startup = Startup::find($id);

        $startup->delete();

        return redirect()->route('users.index');
    }
}
