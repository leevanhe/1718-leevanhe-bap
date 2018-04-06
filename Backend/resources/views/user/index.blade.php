@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <h3 style="color: black; padding-bottom: 10px;">Users</h3>     
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        @include('partials._messages')
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                            {{ link_to_route('users.create', 'Add new User',null , ['class'=>'btn btn-primary','style'=>'background-color:#E94F43;border-color:#E94F43;']) }}
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
                                    <td>
                                        <div style="width:32px; height:32px; overflow: hidden;  ">
                                            <img style="width: 32px; height: auto;" src="assets/img/uploads/avatar/{{ $startup->avatar }}">
                                        </div>
                                    </td>
                                    <td>{{ $startup->name }}</td>
                                    <td>{{ substr($startup->description, 0, 70) }}{{ strlen($startup->description) > 70 ? "..." : ""}}</td>
                                    <td>
                                        <a href="{{ route('users.show', $startup->id) }}" class="btn btn-success btn-sm" style='background-color:#5cb85c;border-color:#5cb85c;'>View</a> 
                                        <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-info btn-sm" style='background-color:#f0ad4e;border-color:#f0ad4e;'>Edit</a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $startups->links() }}
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')