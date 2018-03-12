@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">{{ $startup->name }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong>About the company</strong></div>
                    <div class="panel-body">
                        <p><strong>description:</strong> <br>{{ $startup->description }}</p>
                        <p><strong>website:</strong> <br><a href="{{ $startup->website }}" target="_blank">{{ $startup->website }}</a></p>
                        <p><strong>adress:</strong> <br>{{ $startup->adresses->line1 }}, {{ $startup->adresses->city }} {{ $startup->adresses->ZIP }}, {{ $startup->adresses->country }}</p>
                        <p><strong>website:</strong> <br>{{ $startup->website }}</p>
                        <p><strong>employees:</strong> <br>{{ $startup->employees }}</p>
                        <p><strong>startdate:</strong> <br>{{ $startup->start }}</p>
                        <p><strong>categories:</strong> <br> #category #category #category #category #category #category #category</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="well">
                    <dl class="dl-horizontal">
                        <dt>Created at:</dt>
                        <dd>{{ Carbon\Carbon::parse($startup->created_at)->format('d-m-Y') }}</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Updated at:</dt>
                        <dd>{{ Carbon\Carbon::parse($startup->updated_at)->format('d-m-Y') }}</dd>
                    </dl>
                    <hr>
                    <div class="row">
                        <div class="col-sm-6">
                            <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-primary btn-block">Edit</a>
                        </div>
                        <div class="col-sm-6">
                            <a href="{{ route('users.destroy', $startup->id) }}" class="btn btn-danger btn-block">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Realisations</div>
                    <div class="panel-body"></div>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Services</div>
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')