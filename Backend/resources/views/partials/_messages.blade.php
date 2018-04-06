@if(Session::has('succes'))
<div style="margin: 10px 0" class="alert alert-success" role="alert">
    <strong>Succes:</strong> {{ Session::get('succes') }}
</div>
@elseif(Session::has('deleted'))
<div style="margin: 10px 0" class="alert alert-danger" role="alert">
    <strong>Deleted:</strong> {{ Session::get('deleted') }}
</div>
@endif