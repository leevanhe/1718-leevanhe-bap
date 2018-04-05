@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <h3 style="color: black; padding-bottom: 10px;">Events</h3>     
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                {{ link_to_route('events.create', 'Add new Event',null , ['class'=>'btn btn-primary', 'style'=>'background-color:#E94F43;border-color:#E94F43;']) }}
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <form class="navbar-form" role="search" action="" method="GET">
                                    <div class="input-group" style="float: right;">
                                        <input type="text" class="form-control" placeholder="Search" name="name">
                                        <div class="input-group-btn">
                                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </form>                            
                            </div>
                        </div>
                        @include('partials._messages')
                        @if(count($events) === 0)
                        <p>No events</p>
                        @else
                        <table class="table">
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
                                        <a href="{{ route('events.show', $event->id) }}" class="btn btn-success btn-sm" style='background-color:#5cb85c;border-color:#5cb85c;'>View</a> 
                                        <a href="{{ route('events.edit', $event->id) }}" class="btn btn-info btn-sm" style='background-color:#f0ad4e;border-color:#f0ad4e;'>Edit</a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $events->links() }}
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')