@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 style="color: black;">Users
                {{ link_to_route('users.create', 'Add new User',null , ['class'=>'btn btn-primary', 'style'=>'float:right;']) }}
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        @include('partials._messages')
                        @if(count($startups) === 0)
                        <p>No Users</p>
                        @else
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>avatar</th>
                                    <th>Company name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($startups as $startup)
                                <tr>
                                    <th>{{ $startup->id }}</th>
                                    <td><img src="assets/img/uploads/avatar/{{ $startup->user->avatar }}" class="avatar-small"></td>
                                    <td>{{ $startup->name }}</td>
                                    <td>{{ substr($startup->description, 0, 70) }}{{ strlen($startup->description) > 70 ? "..." : ""}}</td>
                                    <td>
                                        <a href="{{ route('users.show', $startup->id) }}"><i style="padding-right:10px;" class="text-info fa fa-eye fa-lg"></i></a> 
                                        <a href="{{ route('users.edit', $startup->id) }}"><i class="text-warning fa fa-edit fa-lg"></i></a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')