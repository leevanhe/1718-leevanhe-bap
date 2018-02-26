@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Events</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                @forelse ($events as $event)
                    <li>{{ $event->name }}</li>
                @empty
                    <p>No events</p>
                @endforelse
                </div>
            </div>
        </div>
    </div>
@endsection('content')