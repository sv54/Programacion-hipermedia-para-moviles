@extends('layouts.master')

@section('content')
    <div class="row">

        <div class="col-sm-4">
            <img src="{{ $pelicula->poster }}" alt="Portada de la película">

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
                    <a href="" class="btn btn-danger">Devolver Pelicula</a>
                @else
                    Película disponible para alquilar
                    <br>
                    <a href="" class="btn btn-primary d-inline-block">Alquilar Pelicula</a>
                @endif
            </p>

            {{-- TODO: Datos de la película --}}
            <a href={{"/catalog/edit/".$pelicula->id}} class="btn btn-warning d-inline-block">Editar Pelicula</a>
            <a href="/catalog" class="btn btn-default d-inline-block">Volver al Listado</a>
        </div>
    </div>
@endsection
