@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Users</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Functie</th>
                            <th>thest</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($startups as $startup)
                        <tr>
                            <td>{{ $startup->name}}</td>
                            <td>{{ $startup->adresses->city }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                @foreach($users as $user)
                <p>{{ $user->role->name }}</p>
                @endforeach
            </div>
        </div>
    </div>
@endsection('content')