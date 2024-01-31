@extends('layouts.master')

@section('content')
    <div class="row" style="margin-top:40px">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">
                    Modificar pelicula
                </div>
                <div class="card-body" style="padding:30px">
                    <form action="" method="POST">
                        @method('PUT')
                        @csrf
                        <div class="form-group">
                            <label for="title">Título</label>
                            <input value="{{$pelicula->title }}" type="text" name="title" id="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="year">Año</label>
                            <input value="{{$pelicula->year}}" type="text" class="form-control" id="year" name="year" required>
                        </div>

                        <div class="form-group">
                            <label for="director">Director</label>
                            <input value="{{$pelicula->director}}" type="text" class="form-control" id="director" name="director" required>
                        </div>

                        <div class="form-group">
                            <label for="poster">Poster</label>
                            <input value="{{$pelicula->poster}}" type="text" class="form-control" id="poster" name="poster" required>
                        </div>

                        <div class="form-group">
                            <label for="synopsis">Resumen</label>
                            <textarea name="synopsis" id="synopsis" class="form-control" rows="3">{{$pelicula->synopsis}}</textarea>
                        </div>

                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary" style="padding:8px 100px;margin-top:25px;">
                                Modificar película
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
@endsection
