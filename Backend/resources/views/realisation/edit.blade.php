@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <h3 style="color: black; padding-bottom: 10px;">Edit {{ $realisation->name }}</h3>     
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
                            {!! Form::model($realisation , ['method'=>'PUT','route' => ['realisations.update', $realisation->id]]) !!}

                            <h4 class="page-header"><i class="fa fa-info" style="padding-right: 10px"></i>About Realisation</h4>

                            <div style="margin-top: 20px;" class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('name', 'Realisations name') !!}
                                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::label('description', 'Description') !!}
                                        {!! Form::textarea('description', null, ['class'=>'form-control']) !!}
                                    </div>
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