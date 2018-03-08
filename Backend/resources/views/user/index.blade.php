@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Users
                {{ link_to_route('users.create', 'Add new User',null , ['class'=>'btn btn-primary', 'style'=>'float:right;']) }}
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                @include('partials._messages')
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Company name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($startups as $startup)
                        <tr>
                            <td>{{ $startup->name}}</td>
                            <td>{{ substr($startup->description, 0, 100) }}{{ strlen($startup->description) > 100 ? "..." : ""}}</td>
                            <td>
                                <a href="{{ route('users.show', $startup->id) }}" class="btn btn-default btn-sm">View</a> 
                                <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-default btn-sm">Edit</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection('content')