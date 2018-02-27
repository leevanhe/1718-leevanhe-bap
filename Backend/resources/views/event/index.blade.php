@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Events 
                    {{ link_to_route('events.create', 'Add new Event',null , ['class'=>'btn btn-primary', 'style'=>'float:right;']) }}
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                @if(count($events) === 0)
                <p>No events</p>
                @else
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>description</th>
                            <th>date</th>
                            <th>adres</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($events as $event)
                        <tr>
                            <td>{{ $event->name }}</td>
                            <td>{{ $event->description }}</td>
                            <td>{{ Carbon\Carbon::parse($event->start)->format('d-m-Y') }} from {{ Carbon\Carbon::parse($event->start)->format('h:m') }}  untill {{ Carbon\Carbon::parse($event->end)->format('h:m')}}</td>
                            <td>{{ $event->adresses->line1 }}, {{ $event->adresses->city }}</td>
                            <td>edit | delete</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                @endif
            </div>
        </div>
    </div>
@endsection('content')