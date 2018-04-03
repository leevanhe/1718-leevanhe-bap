@extends('layouts.app')

@section('body')
<div id="wrapper" style="margin-top:50px; background: linear-gradient(#ec6845, #E94F43);">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}" style="color: black;">
                <img src="assets/img/logo/logo.png" width="30" height="30" style="display: inline-block;">
                StartMeUp</a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">

                <!-- Top navbar -->
                <ul class="nav navbar-nav navbar-right">
                    @guest
                        <li><a href="{{ route('login') }}">Login</a></li>
                        <li><a href="{{ route('register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true" style="position:relative; padding-left:50px; color: black;">
                                <img src="assets/img/uploads/avatar/{{ Auth::user()->startup->avatar }}" class="avatar-header">
                                {{ Auth::user()->username }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endguest
                </ul>

                <!-- Sidebar navbar -->                
                <div class="navbar-default sidebar" role="navigation" style="background: none;">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="{{ ('/dashboard') }}"><i class="fa fa-dashboard fa-lg" style="padding-left: 5px; margin-right:10px;"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="{{ ('/users') }}"><i class="fa fa-users fa-lg" style="padding-left: 5px; margin-right:10px;"></i> Users</a>
                            </li>
                            <li>
                                <a href="{{ ('/events') }}"><i class="fa fa-calendar fa-lg" style="padding-left: 5px; margin-right:10px;"></i> Events</a>
                            </li>
                        </ul>
                    </div>
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