@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Create an event</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel-body">
                    {!! Form::open(array('route' => 'events.store')) !!}

                    <!--Event-->
                    <div class="form-group">
                        {!! Form::label('name', 'Name') !!}
                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('description', 'Description') !!}
                        {!! Form::textarea('description', null, ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('start', 'Start') !!}
                        {!! Form::datetime('start', \Carbon\Carbon::now()->format('Y-m-d H:m:i'), ['class'=>'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('end', 'End') !!}
                        {!! Form::datetime('start', \Carbon\Carbon::now()->format('Y-m-d H:m:i'), ['class'=>'form-control']) !!}
                    </div>

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