@extends('layouts.master')

@section('content')
    <form action="" method="POST">
        @csrf
        <div class="form-group">
            <label for="titulo">Título:</label>
            <input type="text" class="form-control" id="titulo" name="titulo" required>
        </div>
    
        <div class="form-group">
            <label for="año">Año:</label>
            <input type="text" class="form-control" id="año" name="año" required>
        </div>
    
        <div class="form-group">
            <label for="director">Director:</label>
            <input type="text" class="form-control" id="director" name="director" required>
        </div>
    
        <div class="form-group">
            <label for="poster">Poster:</label>
            <input type="text" class="form-control" id="poster" name="poster" required>
        </div>
    
        <div class="form-group">
            <label for="synopsis">Resumen:</label>
            <textarea class="form-control" id="synopsis" name="synopsis" rows="3" required></textarea>
        </div>
    
        <button type="submit" class="btn btn-primary">Añadir película</button>
    </form>
@endsection
