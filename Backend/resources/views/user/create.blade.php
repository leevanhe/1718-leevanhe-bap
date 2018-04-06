@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <h3 style="color: black; padding-bottom: 10px;">Create a User</h3>     
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
                            {!! Form::open(array('route' => 'users.store', 'files'=>true)) !!}

                            <h4 class="page-header"><i class="fa fa-info" style="padding-right: 10px"></i>About company</h4>

                            <div style="margin-top: 20px;" class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('name', 'Company name') !!}
                                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::label('website', 'Website') !!}
                                        {!! Form::text('website', null, ['class'=>'form-control']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::label('employees', 'Employees') !!}
                                        {!! Form::number('employees', null, ['class'=>'form-control', 'min' => 1]) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::label('start', 'Start') !!}
                                        {!! Form::date('start', \Carbon\Carbon::now()->format('Y-m-d'), ['class'=>'form-control']) !!}
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('line1', 'Adress') !!}
                                        {!! Form::text('line1', null, ['class'=>'form-control']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::label('city', 'city') !!}
                                        {!! Form::text('city', null, ['class'=>'form-control']) !!}
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
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        {!! Form::label('description', 'Description') !!}
                                        {!! Form::textarea('description', null, ['class'=>'form-control']) !!}
                                    </div>
                                </div>
                            </div>

                            <h4 class="page-header" style="margin-top: 40px;"><i class="fa fa-user" style="padding-right: 10px"></i>About user</h4>

                            <div style="margin-top: 20px;">
                                <div class="form-group">
                                    {!! Form::label('username', 'Username') !!}
                                    {!! Form::text('username', null, ['class'=>'form-control']) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('password', 'Password') !!}
                                    <div>
                                    <input id="password" type="password" class="form-control" name="password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    {!! Form::label('password', 'Password') !!}
                                    <div>
                                    <input id="password_confirmation" type="password" class="form-control" name="password_confirmation">
                                    </div>
                                </div>
                                <div class="form-group">
                                    {!! Form::label('avatar', 'Avatar') !!}
                                    {!! Form::file('avatar', null, ['class'=>'form-control']) !!}
                                </div>
                            </div>

                            <!--
                            <div>
                                <label for="role">role</label>
                                <select class="form-control" name="role" id="role" data-parsley-required="true">
                                    @foreach ($roles as $role) 
                                        {
                                            <option value="{{ $role->id }}">{{ $role->name }}</option>
                                        }
                                    @endforeach
                                </select>
                            </div>
                            -->

                            <div class="form-group">
                                {!! Form::button('Create',['type' => 'submit', 'class' => 'btn btn-success'])!!}
                            </div>

                            {!!Form::close()!!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection('content')