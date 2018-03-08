<div class="navigation">
    <a href="/">
        <i class="fa fa-home" aria-hidden="true"></i>
    </a>
</div>


@extends('layouts.app')

@section('body')
<div id="wrapper">
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">StartMeUp</a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">

                <!-- Top navbar -->
                <ul class="nav navbar-nav navbar-right">
                    @guest
                        <li><a href="{{ route('login') }}">Login</a></li>
                        <li><a href="{{ route('register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                {{ Auth::user()->username }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endguest
                </ul>

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li {{ (Request::is('/dashboard') ? 'class="active"' : '') }}>
                                <a href="{{ ('/dashboard') }}"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                            <li {{ (Request::is('/users') ? 'class="active"' : '') }}>
                                <a href="{{ ('/users') }}"><i class="fa fa-dashboard fa-fw"></i> Users</a>
                            </li>
                            <li {{ (Request::is('/events') ? 'class="active"' : '') }}>
                                <a href="{{ ('/events') }}"><i class="fa fa-dashboard fa-fw"></i> Events</a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.sidebar-collapse -->
                </div>
            </div>
        </nav>
        <div id="page-wrapper">
            <div class="row">
                @yield('content')
            </div>
        </div>
</div>
@endsection