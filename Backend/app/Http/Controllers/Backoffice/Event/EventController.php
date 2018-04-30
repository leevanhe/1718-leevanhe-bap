<?php

namespace App\Http\Controllers\Backoffice\Event;

use App\Event;
use App\Adresses;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Session;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($name = $request->input('name')) {
            $events= Event::where('name', 'like', '%' . $name . '%')->paginate(15);
        }
        else{
            $events = Event::paginate(15);
        } 
        
        return view ('event.index', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view ('event.create');
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
        $this->validate($request, array(
            'name' => 'required',
            'description' => 'required',
        ));
        //store
        $event = new Event;

        $event->name = $request->name;
        $event->description = $request->description;
        $event->start = $request->start;
        $event->end = $request->end;
        $event->save();

        $adress = new Adresses;

        $adress->line1 = $request->line1;
        $adress->city = $request->city;
        $adress->ZIP = $request->ZIP;
        $adress->country = $request->country;

        $event->adresses->save($adress);
        
        //Redirect
        Session::flash('succes', 'The event was succesfully saved!');

        return redirect()->route('events.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $event = Event::find($id);

        return view('event.show', compact('event'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $event = Event::find($id);

        return view('event.edit', compact('event'));
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
        $event = Event::find($id); 
        $event->name = $request->name;
        $event->description = $request->description;
        $event->start = $request->start;
        $event->end = $request->end;
        $event->save();

        $adress = $event->adresses;

        $adress->line1 = $request->line1;
        $adress->city = $request->city;
        $adress->ZIP = $request->ZIP;
        $adress->country = $request->country;

        $event->adresses->save($adress);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::find($id);

        $event->delete();

        Session::flash('deleted', 'The event was succesfully deleted');

        return redirect()->route('events.index');
    }
}
