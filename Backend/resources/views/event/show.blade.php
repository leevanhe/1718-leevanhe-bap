@extends('layouts.globals.navigation')

@section('content')
    <div class="container" style="margin-top: 20px;">
        <div class="row">
            <div class="col-xs-12">
                @include('partials._messages')
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row"  style="margin-bottom: 20px;">
                            <div class="col-md-8">
                                <h2>{{ $event->name}}</h2>                        
                            </div>
                            <div class="col-md-4">
                                <div style="float:right;">
                                    <div style="display: inline-block; margin-top: 30px;">
                                        <a href="{{ route('events.edit', $event->id) }}" class="btn btn-info btn-sm" style='background-color:#f0ad4e;border-color:#f0ad4e;'>Edit</a>
                                    </div>
                                    <div style="display: inline-block;">
                                        {!! Form::open(['route'=>['events.destroy', $event->id],'method'=> 'DELETE'])!!}

                                        {!! Form::submit('delete',['class'=>'btn btn-danger btn-sm', 'style'=>'background-color:#E94F43;border-color:#E94F43;'])!!}

                                        {!! Form::close() !!} 
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12">
                            <p><strong>Description</strong><br> {{ $event->description }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <p><strong>Start-date:</strong> <br>{{ Carbon\Carbon::parse($event->start)->format('d-m-Y H:m:i') }}</p>
                                <p><strong>adress:</strong> <br>{{ $event->adresses->line1 }}, {{ $event->adresses->city }} {{ $event->adresses->ZIP }}, {{ $event->adresses->country }}</p>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <p><strong>End-date:</strong> <br>{{ Carbon\Carbon::parse($event->end)->format('d-m-Y H:m:i') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')