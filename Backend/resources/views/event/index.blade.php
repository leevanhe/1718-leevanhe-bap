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
                @include('partials._messages')
                @if(count($events) === 0)
                <p>No events</p>
                @else
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>date</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($events as $event)
                        <tr>
                            <td>{{ $event->id }}</td>
                            <td>{{ $event->name }}</td>
                            <td>{{ substr($event->description, 0, 50) }} {{strlen($event->description) > 50 ? '...' : '' }}</td>
                            <td>{{ Carbon\Carbon::parse($event->start)->format('d-m-Y') }} from {{ Carbon\Carbon::parse($event->start)->format('h:m') }}  untill {{ Carbon\Carbon::parse($event->end)->format('h:m')}}</td>
                            <td>
                                <a href="{{ route('events.show', $event->id) }}" class="btn btn-default btn-sm">View</a> 
                                <a href="{{ route('events.edit', $event->id) }}" class="btn btn-default btn-sm">Edit</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                @endif
            </div>
        </div>
    </div>
@endsection('content')