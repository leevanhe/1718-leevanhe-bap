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
                    <div class="input-group">
                    {!! Form::open(['method'=>'GET','url'=>'users','class'=>'navbar-form navbar-left','role'=>'search'])  !!}                    
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" name="search" placeholder="Search...">
                        <button class="btn btn-default-sm" type="submit">zoek</button>
                    </div>
                    {!! Form::close() !!}
                    </div>
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
                                    <td><img src="assets/img/uploads/avatar/{{ $startup->avatar }}" class="avatar-small"></td>
                                    <td>{{ $startup->name }}</td>
                                    <td>{{ substr($startup->description, 0, 70) }}{{ strlen($startup->description) > 70 ? "..." : ""}}</td>
                                    <td>
                                        <a href="{{ route('users.show', $startup->id) }}" class="btn btn-success btn-sm">View</a> 
                                        <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-info btn-sm">Edit</a>
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