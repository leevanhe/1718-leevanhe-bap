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
                                <img style="padding-top: 30px; width:100%;" src="../assets/img/uploads/avatar/{{ $startup->user->avatar }}">
                            </div>
                            <div class="col-xs-12 col-md-8">
                                <div class="col-md-8">
                                    <h2>{{ $startup->name }}</h2>
                                </div>
                                <div class="col-md-4">
                                    <div style="float:right;">
                                        <div style="display: inline-block; margin-top: 30px;">
                                            <a href="{{ route('users.edit', $startup->id) }}"><i style="padding-right:10px;" class="text-warning fa fa-edit fa-lg"></i></a>
                                        </div>
                                        <div style="display: inline-block;">
                                            {!! Form::open(['route'=>['users.destroy', $startup->id],'method'=> 'DELETE'])!!}

                                            {!! Form::submit('delete',['class'=>'btn btn-danger'])!!}

                                            {!! Form::close() !!} 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <p><strong>Description:</strong> <br>{{ $startup->description }}</p>
                                </div>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <p><strong>Website:</strong> <br><a href="{{ $startup->website }}" target="_blank">{{ $startup->website }}</a></p>
                                <p><strong>Adress:</strong> <br>{{ $startup->adresses->line1 }}, {{ $startup->adresses->city }} {{ $startup->adresses->ZIP }}, {{ $startup->adresses->country }}</p>
                                <p><strong>Employees:</strong> <br>{{ $startup->employees }}</p>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <p><strong>Startdate:</strong> <br>{{ $startup->start }}</p>
                                <p><strong>Categories:</strong> <br> #category #category #category #category #category #category #category</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-body">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#menu2">Realisations</a></li>
                            <li><a data-toggle="tab" href="#menu3">Services</a></li>
                        </ul>

                        <div class="tab-content" style="margin-top: 10px;">

                            <div id="menu2" class="tab-pane fade in active">
                                @if(count($realisations) === 0)
                                <p>No realisations</p>
                                @else
                                    @foreach($realisations as $realisation)
                                    <div class="realisations">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p><strong>Name:</strong> <br>{{ $realisation->name}}</p>
                                            </div>
                                            <div class="col-md-4" style="margin-top:15px;">
                                                <div style="float:right;">
                                                <a href="#"><i style="padding-right:10px;" class="text-warning fa fa-edit fa-lg"></i></a> 
                                                <a href="#"><i class="text-danger fa fa-trash fa-lg"></i></a>
                                                </div>
                                            </div>
                                        </div>
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