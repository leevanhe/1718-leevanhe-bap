@extends('layouts.globals.navigation')

@section('content')
    <div class="container">
       <div class="row">
           <div class="col-lg-12" style="margin-top: 50px;">
               <div class="panel panel-default">
                   <div class="panel-body">
                   @foreach($connections as $connection)
                    <div style="background-color:green;">
                        <p style="color: yellow;">{{ $connection->name }}</p>
                        <p style="color: yellow;">{{ $connection->posts }}</p>
                    </div>  
                    @endforeach
                   </div>
               </div>
           </div>
       </div>
    </div>
@endsection('content')