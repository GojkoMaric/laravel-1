@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Home Page</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if(Auth::user())
                        You are logged in!

                        Your username is {{$user->first_name}} {{$user->last_name}}
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>


@endsection
