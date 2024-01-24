<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class APICatalogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json( Movie::all() );
    }

    /**
     * Show the form for creating a n   ew resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pelicula = new Movie();
        $pelicula->title = $request->title;
        $pelicula->synopsis = $request->synopsis;
        $pelicula->year = $request->year;
        $pelicula->director = $request->director;
        $pelicula->poster = $request->hasFile('poster');
        $pelicula->rented = false;
        $pelicula->save();

        return response()->json( ['error' => false, 'msg'=> 'La pelicula se ha creado con exito'] );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $movie = Movie::findOrFail($id);
        return response()->json( $movie );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $m = Movie::findOrFail($id);
        $m->title = $request->title;
        $m->save();
        //resto de modificaciones
        return response()->json( ['error' => false,"message"=> "La pelicula se ha modificado correctamente"] );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $m = Movie::findOrFail($id);
        $m->delete();
        return response()->json(['error' => false, 'msg' =>'La pelicula se ha eliminado correctamente']);
    }
    
    public function putRent($id) {
        $m = Movie::findOrFail( $id );
        $m->rented = true;
        $m->save();
        return response()->json( ['error' => false,
                              'msg' => 'La película se ha marcado como alquilada' ] );
    }

    public function putReturn($id) {
        $m = Movie::findOrFail( $id );
        $m->rented = false;
        $m->save();
        return response()->json( ['error' => false,
                              'msg' => 'La película se ha marcado como devuelta' ] );
    }
}
