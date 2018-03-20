@extends('layouts.app')

@section('body')
<div class="container-fluid" style="background-color: white;">
    <div class="row">
        <div class="col-xs-12" style="padding-top:14px;">
            <p style="color:black;"><img src="assets/img/logo/logo.png" width="30" height="30">    StartMeUp</p>
            <h2 class="text-center" style="color:black; margin-top: 180px;"><strong>Sign in to StartMeUp</strong></h2>
            <h4 class="text-center" style="color:black;">Enter your details below</h4>
            <div class="col-xs-12 col-md-4 col-md-offset-4">
                {{ Form::open(array('route' => 'authenticate')) }}
                    {{ csrf_field() }}
                    
                    <div class="form-group">
                        {!! Form::label('username', 'Username') !!}
                        {!! Form::text('username', null, ['class'=>'form-control']) !!}
                    </div>

                    <div class="form-group">
                        {!! Form::label('password', 'Password') !!}
                        <div>
                        <input id="password" type="password" class="form-control" name="password" required>
                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>    
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <a style="float: right;" class="btn btn-link" href="{{ route('password.request') }}">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>

                    <div class="col-xs-4 col-xs-offset-5">
                        <div class="form-group">
                            {!! Form::button('Login',['type' => 'submit', 'class' => 'btn btn-success'])!!}
                        </div>
                    </div>


                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>
@endsection
