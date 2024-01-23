<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Movie;
use Alert;

class CatalogController extends Controller
{




    public function getIndex()
    {
        $arrayPeliculas = DB::table('movies')->get();
        return view("catalog.index", ['arrayPeliculas' => Movie::all()]);
    }
    public function getShow($id)
    {
        return view('catalog.show', ['id' => $id, 'pelicula' => Movie::findOrFail($id)]);
    }
    function getCreate()
    {
        return view("catalog.create");
    }
    public function getEdit($id)
    {
        return view('catalog.edit', array('id' => $id, 'pelicula' => Movie::findOrFail($id)));
    }

    public function postCreate(Request $request)
    {
        $pelicula = new Movie();
        $pelicula->title = $request->title;
        $pelicula->synopsis = $request->synopsis;
        $pelicula->year = $request->year;
        $pelicula->director = $request->director;
        $pelicula->poster = $request->hasFile('poster');
        $pelicula->rented = false;
        $pelicula->save();

        Alert::success('', 'La película se ha guardado correctamente');
        return redirect('catalog')->with('success', '');
    }

    public function putEdit(Request $request, $id)
    {
        $pelicula = Movie::findOrFail($id);

        $pelicula->title = $request->title;
        $pelicula->synopsis = $request->synopsis;
        $pelicula->year = $request->year;
        $pelicula->director = $request->director;
        $pelicula->poster = $request->hasFile('poster');
        $pelicula->save();
        Alert::success('', 'La película se ha modificado correctamente');

        return redirect('catalog')->with('success', '');
    }

    public function putRent(Request $request, $id)
    {
        $pelicula = Movie::findOrFail($id);
        $pelicula->rented = true;
        $pelicula->save();

        Alert::success('', 'La película se ha alquilado');
        return redirect('catalog/show/' . $id)->with('success', '');
    }
    public function putReturn(Request $request, $id)
    {
        $pelicula = Movie::findOrFail($id);
        $pelicula->rented = false;
        $pelicula->save();

        Alert::success('', 'La película se ha devuelto');
        return redirect('/catalog/show/' . $id)->with('success', '');
    }
    public function deleteMovie(Request $request, $id)
    {
        $pelicula = Movie::findOrFail($id);
        $pelicula->delete();
        Alert::success('', 'La película se ha eliminado');
        return redirect('/catalog')->with('success', '');
    }
}
