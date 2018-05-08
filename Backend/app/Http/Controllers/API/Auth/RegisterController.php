<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Role;
use App\User;
use App\Startup;
use App\Adresses;

class RegisterController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //TODO
        $role = Role::where('name', 'bedrijf')->first();

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
        $startup->employees = $request->employees;
        $startup->start = $request->start;

        $startup->adresses()->associate($adress);
        $startup->user()->associate($user);

        $startup->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
