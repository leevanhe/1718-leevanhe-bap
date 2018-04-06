<?php

namespace App\Http\Controllers\Backoffice\Realisation;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realisations;
use Session;

class RealisationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $realisation = Realisations::find($id);

        return view('realisation.edit', compact('realisation'));
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
        //Update
        $realisation = Realisations::find($id);
        $realisation->name = $request->name;
        $realisation->description = $request->description;
        $realisation->save();
        
        $startup = Realisations::find($id)->first()->startup;

        //Redirect
        Session::flash('succes', 'The realisation was succesfully saved!');

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
        $realisation = Realisations::find($id);
        $realisation->delete();

        //Redirect
        Session::flash('deleted', 'The realisation was succesfully deleted!');

        return redirect()->route('users.index');
    }
}
