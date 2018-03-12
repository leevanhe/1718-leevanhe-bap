@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">{{ $event->name }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong>About the event</strong></div>
                    <div class="panel-body">
                        <p><strong>description:</strong> <br>{{ $event->description }}</p>
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <p><strong>Start-date:</strong> <br>{{ Carbon\Carbon::parse($event->start)->format('d-m-Y H:m:i') }}</p>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <p><strong>End-date:</strong> <br>{{ Carbon\Carbon::parse($event->end)->format('d-m-Y H:m:i') }}</p>
                            </div>
                        </div>
                        <p><strong>adress:</strong> <br>{{ $event->adresses->line1 }}, {{ $event->adresses->city }} {{ $event->adresses->ZIP }}, {{ $event->adresses->country }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="well">
                    <dl class="dl-horizontal">
                        <dt>Created at:</dt>
                        <dd>{{ Carbon\Carbon::parse($event->created_at)->format('d-m-Y') }}</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Updated at:</dt>
                        <dd>{{ Carbon\Carbon::parse($event->updated_at)->format('d-m-Y') }}</dd>
                    </dl>
                    <hr>
                    <div class="row">
                        <div class="col-sm-6">
                            <a href="{{ route('events.edit', $event->id) }}" class="btn btn-primary btn-block">Edit</a>
                        </div>
                        <div class="col-sm-6">
                            <a href="{{ route('events.destroy', $event->id) }}" class="btn btn-danger btn-block">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')