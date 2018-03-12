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
                        <p><strong>Description:</strong> <br>{{ $startup->description }}</p>
                        <p><strong>Website:</strong> <br><a href="{{ $startup->website }}" target="_blank">{{ $startup->website }}</a></p>
                        <p><strong>Adress:</strong> <br>{{ $startup->adresses->line1 }}, {{ $startup->adresses->city }} {{ $startup->adresses->ZIP }}, {{ $startup->adresses->country }}</p>
                        <p><strong>Employees:</strong> <br>{{ $startup->employees }}</p>
                        <p><strong>Startdate:</strong> <br>{{ $startup->start }}</p>
                        <p><strong>Categories:</strong> <br> #category #category #category #category #category #category #category</p>
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
                    <div class="panel-body">
                        @if(count($realisations) === 0)
                        <p>No realisations</p>
                        @else
                            @foreach($realisations as $realisation)
                            <p><strong>Name:</strong> <br>{{ $realisation->name}}</p>
                            <p><strong>Description:</strong> <br>{{ $realisation->description}}</p>
                            <hr>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Services</div>
                    <div class="panel-body">
                        @if(count($services) === 0)
                        <p>No services</p>
                        @else
                            @foreach($services as $service)
                            <p><strong>Description</strong> <br>{{ $service->description }}</p>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')