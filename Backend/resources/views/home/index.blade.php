@extends('layouts.globals.navigation')

@section('content')

{!! Charts::assets() !!}

    <div class="container">
        <!--Panels-->
        <div class="row">
            <div class="col-lg-12">
                <h1 style="color: black;">Dashboard</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-users fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge">{{ $getUsersCount }}</div>
                                <div>Users</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="panel panel-green" style="border-color: #5cb85c;">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-calendar fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge">{{ $getEventsCount }}</div>
                                <div>Events</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="panel panel-yellow" style="border-color: #f0ad4e;">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-handshake-o fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge">{{ $getServicesCount }}</div>
                                <div>Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="panel panel-red" style="border-color: #d9534f;">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-comments fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge">{{ $getPostsCount }}</div>
                                <div>Posts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Content-->
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div>
                            {!! $chart->render() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h1 class="panel-title">Recent users</h1>
                    </div>
                    <div class="panel-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($getRecentUsers as $getRecentUser)
                                <tr>
                                    <td>{{ $getRecentUser->id }}</td>
                                    <td>{{ $getRecentUser->name }}</td>
                                    <td>{{ $getRecentUser->created_at }}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h1 class="panel-title">Most active users</h1>
                    </div>
                    <div class="panel-body">
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection('content')