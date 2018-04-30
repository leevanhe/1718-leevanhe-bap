@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <h3 style="color: black; padding-bottom: 10px;">Create an event</h3>     
            </div>
        </div>
        <div class="row">
        <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="panel-body">
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            {!! Form::open(array('route' => 'events.store')) !!}

                            <h4 class="page-header"><i class="fa fa-info" style="padding-right: 10px"></i>About event</h4>

                            <div style="margin-top: 20px;" class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('name', 'Event name') !!}
                                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('start', 'Start date') !!}
                                        {!! Form::datetime('start', null, ['class'=>'form-control', 'min' => 1]) !!}
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        {!! Form::label('end', 'End date') !!}
                                        {!! Form::datetime('end', null, ['class'=>'form-control', 'min' => 1]) !!}
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('description', 'Description') !!}
                                        {!! Form::textarea('description', null, ['class'=>'form-control']) !!}
                                    </div>
                                </div>
                            </div>

                            <h4 class="page-header" style="margin-top: 40px;"><i class="fa fa-user" style="padding-right: 10px"></i>Adress</h4>

                            <div style="margin-top: 20px;">
                                <div class="form-group">
                                    {!! Form::label('line1', 'line1') !!}
                                    {!! Form::text('line1]', null, ['class'=>'form-control']) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('city', 'city') !!}
                                    {!! Form::text('city]', null, ['class'=>'form-control']) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('ZIP', 'ZIP') !!}
                                    {!! Form::text('ZIP', null, ['class'=>'form-control']) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('country', 'Country') !!}
                                    {!! Form::text('country', null, ['class'=>'form-control']) !!}
                                </div>
                            </div>

                            <div class="form-group">
                                {!! Form::button('Save',['type' => 'submit', 'class' => 'btn btn-primary'])!!}
                            </div>

                            {!!Form::close()!!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')