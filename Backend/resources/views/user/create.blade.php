@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Create a User</h1>
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
                    {!! Form::open(array('route' => 'users.store')) !!}

                    <!--Adress-->
                    <div class="form-group">
                        {!! Form::label('line1', 'line1') !!}
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

                    <!--User-->
                    <div class="form-group">
                        {!! Form::label('username', 'Username') !!}
                        {!! Form::text('username', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('password', 'Password') !!}
                        {!! Form::password('password', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('password_confirmation', 'Confirm Password') !!}
                        {!! Form::password('password_confirmation', null, ['class'=>'form-control']) !!}
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
                        {!! Form::label('image', 'image') !!}
                        {!! Form::text('image', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('employees', 'Employees') !!}
                        {!! Form::text('employees', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('start', 'Start') !!}
                        {!! Form::date('start', \Carbon\Carbon::now()->format('Y-m-d'), ['class'=>'form-control']) !!}
                    </div>
                

                    <div class="form-group">
                        {!! Form::button('Create',['type' => 'submit', 'class' => 'btn btn-primary'])!!}
                    </div>

                    {!!Form::close()!!}
                </div>
            </div>
        </div>
    </div>
@endsection('content')

@section ('script')
<script type="text/javascript">

$('#start').datepicker()
</script>
@endsection