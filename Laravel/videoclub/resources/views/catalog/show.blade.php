@extends('layouts.master')

@section('content')
    <div class="row">

        <div class="col-sm-4">
            <img src="{{ $pelicula->poster }}" alt="Portada de la película" style="max-width:100%;">

        </div>
        <div class="col-sm-8">

            <h2>{{ $pelicula->title }}</h2>
            <h5>Año: {{ $pelicula->year }}</h5>
            <h5>Director: {{ $pelicula->director }}</h5>
            <p><b>Resumen: </b> {{ $pelicula->synopsis }}</p>
            <p><b>Estado: </b>
                @if ($pelicula->rented)
                    Película actualmente alquilada
                    <br>
                    <form action="{{action([App\Http\Controllers\CatalogController::class, 'putReturn'], ['id' => $pelicula->id])}}"
                        method="POST" style="display:inline">
                        @method('PUT')
                        @csrf
                        <button type="submit" class="btn btn-danger" style="display:inline">
                            Devolver película
                        </button>
                    </form>
                @else
                    Película disponible para alquilar
                    <br>
                    <form action="{{action([App\Http\Controllers\CatalogController::class, 'putRent'], ['id' => $pelicula->id])}}"
                        method="POST" style="display:inline">
                        @method('PUT')
                        @csrf
                        <button type="submit" class="btn btn-primary" style="display:inline">
                            Alquilar película
                        </button>
                    </form>
                @endif
            </p>

            {{-- TODO: Datos de la película --}}
            <a href={{ '/catalog/edit/' . $pelicula->id }} class="btn btn-warning d-inline-block" style="display:inline; margin-bottom: 10px;">Editar Pelicula</a>
            <br>
            <form
                action="{{ action([App\Http\Controllers\CatalogController::class, 'deleteMovie'], ['id' => $pelicula->id]) }}"
                method="POST" style="display:inline; margin-bottom: 10px;">
                @method('DELETE')
                @csrf
                <button type="submit" class="btn btn-danger" style="display:inline">
                    Eliminar película
                </button>
            </form>
            <br>
            <a href="/catalog" class="btn btn-default d-inline-block" style="margin-bottom: 10px;">Volver al Listado</a>
        </div>
    </div>
@endsection
