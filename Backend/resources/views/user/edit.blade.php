@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Edit {{ $startup->name }} </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
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
                    {!! Form::model($startup , ['method'=>'PUT','route' => ['users.update', $startup->id]]) !!}

                    <!--Startup-->
                    <div class="form-group">
                        {!! Form::label('name', 'Company name') !!}
                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('description', 'Description') !!}
                        {!! Form::textarea('description', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('website', 'Website') !!}
                        {!! Form::text('website', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('employees', 'Employees') !!}
                        {!! Form::text('employees', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('start', 'Start') !!}
                        {!! Form::date('start', \Carbon\Carbon::now()->format('Y-m-d'), ['class'=>'form-control']) !!}
                    </div>

                    <!--User-->
                    <div class="form-group">
                        {!! Form::label('avatar', 'Avatar') !!}
                        {!! Form::file('user[avatar]', null, ['class'=>'form-control']) !!}
                    </div>

                    <!--Adress-->
                    <div class="form-group">
                        {!! Form::label('line1', 'line1') !!}
                        {!! Form::text('adresses[line1]', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('city', 'city') !!}
                        {!! Form::text('adresses[city]', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('ZIP', 'ZIP') !!}
                        {!! Form::text('adresses[ZIP]', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('country', 'Country') !!}
                        {!! Form::text('adresses[country]', null, ['class'=>'form-control']) !!}
                    </div>
                

                    <div class="form-group">
                        {!! Form::button('Save',['type' => 'submit', 'class' => 'btn btn-primary'])!!}
                    </div>

                    {!!Form::close()!!}
                </div>
            </div>
        </div>
    </div>
@endsection('content')