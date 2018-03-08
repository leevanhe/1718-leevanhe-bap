@if(Session::has('succes'))
<div class="alert alert-success" role="alert">
    <strong>Succes:</strong> {{ Session::get('succes') }}
</div>
@endif