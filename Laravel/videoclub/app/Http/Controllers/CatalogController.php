<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Movie;

class CatalogController extends Controller
{




    public function getIndex()
    {
        $arrayPeliculas = DB::table('movies')->get();
        return view("catalog.index", ['arrayPeliculas' => Movie::all()]);
    }
    public function getShow($id)
    {
        return view('catalog.show', ['id'=>$id, 'pelicula' => Movie::findOrFail($id)]);
    }
    function getCreate(){
        return view("catalog.create");
    }
    public function getEdit($id)
    {
        return view('catalog.edit', array('id'=>$id, 'pelicula' => Movie::findOrFail($id)));
    }
}
