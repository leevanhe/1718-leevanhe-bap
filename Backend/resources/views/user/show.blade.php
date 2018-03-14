@extends('layouts.globals.navigation')

@section('content')
    <div class="container" style="margin-top: 20px;">
        <div class="row">
            <div class="col-xs-12">
                @include('partials._messages')
                <div class="panel panel default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <img src="../assets/img/uploads/avatar/{{ $startup->user->avatar }}">
                            </div>
                            <div class="col-xs-12 col-md-8">
                                <h2>{{ $startup->name }}</h5>
                                <p><strong>Description:</strong> <br>{{ $startup->description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-body">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#menu1">Aditional information</a></li>
                            <li><a data-toggle="tab" href="#menu2">Realisations</a></li>
                            <li><a data-toggle="tab" href="#menu3">Services</a></li>
                        </ul>

                        <div class="tab-content">

                            <div id="menu1" class="tab-pane fade in active">
                                <p><strong>Website:</strong> <br><a href="{{ $startup->website }}" target="_blank">{{ $startup->website }}</a></p>
                                <p><strong>Adress:</strong> <br>{{ $startup->adresses->line1 }}, {{ $startup->adresses->city }} {{ $startup->adresses->ZIP }}, {{ $startup->adresses->country }}</p>
                                <p><strong>Employees:</strong> <br>{{ $startup->employees }}</p>
                                <p><strong>Startdate:</strong> <br>{{ $startup->start }}</p>
                                <p><strong>Categories:</strong> <br> #category #category #category #category #category #category #category</p>

                                <div class="row"></div>

                                <div class="col-sm-6 col-md-2">
                                    <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-primary btn-block">Edit</a>
                                </div>
                                <div class="col-sm-6 col-md-2">
                                    {!! Form::open(['route'=>['users.destroy', $startup->id],'method'=> 'DELETE'])!!}

                                    {!! Form::submit('Delete',['class'=>'btn btn-danger btn-block'])!!}

                                    {!! Form::close() !!}
                                </div>
                            </div>

                            <div id="menu2" class="tab-pane fade">
                                @if(count($realisations) === 0)
                                <p>No realisations</p>
                                @else
                                    @foreach($realisations as $realisation)
                                    <div class="realisations">
                                        <p><strong>Name:</strong> <br>{{ $realisation->name}}</p>
                                        <p><strong>Description:</strong> <br>{{ $realisation->description}}</p>
                                        <hr>
                                    </div>
                                    @endforeach
                                @endif    
                            </div>
                            <div id="menu3" class="tab-pane fade">
                                @if(count($services) === 0)
                                <p>No services</p>
                                @else
                                    @foreach($services as $service)
                                    <div class="services">
                                        <p><strong>Description</strong> <br>{{ $service->description }}</p>
                                        <hr>
                                    </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')