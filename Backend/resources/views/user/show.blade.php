@extends('layouts.globals.navigation')

@section('content')
    <div class="container" style="margin-top: 20px;">
        <div class="row">
            <div class="col-xs-12">
                @include('partials._messages')
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row" style="margin-bottom:20px;">
                            <div class="col-xs-12 col-md-4">
                                <div style="height: 200px; width: 350px; overflow: hidden; margin-top: 30px;">
                                    <img style="height: auto; width: 350px;" src="../assets/img/uploads/avatar/{{ $startup->avatar }}">
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-8">
                                <div class="col-md-8">
                                    <h2>{{ $startup->name }}</h2>
                                </div>
                                <div class="col-md-4">
                                    <div style="float:right;">
                                        <div style="display: inline-block; margin-top: 30px;">
                                            <a href="{{ route('users.edit', $startup->id) }}" class="btn btn-info btn-sm" style='background-color:#f0ad4e;border-color:#f0ad4e;'>Edit</a>
                                        </div>
                                        <div style="display: inline-block;">
                                            {!! Form::open(['route'=>['users.destroy', $startup->id],'method'=> 'DELETE'])!!}

                                            {!! Form::submit('delete',['class'=>'btn btn-danger btn-sm', 'style'=>'background-color:#E94F43;border-color:#E94F43;'])!!}

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
                                <p><strong>Categories:</strong><br>
                                @if(count($categories) === 0)
                                    <p>No categories</p>
                                @else
                                    @foreach($categories as $category)
                                        #{{ $category->name }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    @endforeach
                                @endif
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-body">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#realisations">Realisations</a></li>
                            <li><a data-toggle="tab" href="#services">Services</a></li>
                            <li><a data-toggle="tab" href="#connections">Connections</a></li>
                            <li><a data-toggle="tab" href="#recommendations">Recommendations</a></li>
                        </ul>

                        <div class="tab-content" style="margin-top: 10px;">

                            <div id="realisations" class="tab-pane fade in active">
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
                                                    <a href="{{ route('realisations.edit', $realisation->id) }}" class="btn btn-info btn-sm" style='background-color:#f0ad4e;border-color:#f0ad4e;'>Edit</a>
                                                    <div style="display: inline-block;">
                                                        {!! Form::open(['route'=>['realisations.destroy', $realisation->id],'method'=> 'DELETE'])!!}

                                                        {!! Form::submit('delete',['class'=>'btn btn-danger btn-sm', 'style'=>'background-color:#E94F43;border-color:#E94F43;'])!!}

                                                        {!! Form::close() !!} 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p><strong>Description:</strong> <br>{{ $realisation->description}}</p>
                                        <hr>
                                    </div>
                                    @endforeach
                                @endif    
                            </div>

                            <div id="services" class="tab-pane fade">
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

                            <div id="connections" class="tab-pane fade">
                                @if(count($connections) === 0)
                                <p>No connections</p>
                                @else
                                <div class="row">
                                @foreach($connections as $connection)
                                    <div class="col-md-3">
                                        <div class="panel panel-default" style="margin-bottom:20px; margin-top:20px;">
                                            <a href="{{ route('users.show', $connection->id) }}">
                                                <div class="panel-heading" style="padding: 0px; width:100%; height: 150px; overflow: hidden;">
                                                    <h4 class="panel-title"><img src="../assets/img/uploads/avatar/{{ $connection->avatar }}" style="width:100%; height: auto;"></h4>
                                                </div>
                                            </a>
                                            <div class="panel-body">
                                                <p><strong>{{ $connection->name}}</strong></p>
                                                <p>{{ substr($connection->description, 0, 50) }}{{ strlen($connection->description) > 50 ? "..." : ""}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                                @endif  
                            </div>
                            <div id="recommendations" class="tab-pane fade">
                                @if(count($recommendations) === 0)
                                <p>No recommendations</p>
                                @else
                                <div class="row">
                                    @foreach($recommendations as $recommendation)
                                    <div class="col-md-3">
                                         <div class="panel panel-default" style="margin-bottom:20px; margin-top:20px;">
                                             <div class="panel-heading" style="padding: 0px;width:100%; height: 150px; overflow: hidden;">
                                                 <h4 class="panel-title"><img src="../assets/img/uploads/avatar/{{ $recommendation->avatar }}" style="width:100%; height: auto;"></h4>
                                             </div>
                                            <div class="panel-body">
                                                <p><strong>{{ $recommendation->name}}</strong></p>
                                            </div>
                                         </div>
                                    </div>
                                    @endforeach
                                </div>
                                @endif  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')