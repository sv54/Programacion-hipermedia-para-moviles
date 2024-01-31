<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APICatalogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('v1/catalog', [APICatalogController::class, 'index']);
Route::get('v1/catalog/{id}', 'APICatalogController@show');

Route::resource('v1/catalog', APICatalogController::class)->except(['index', 'show'])
    ->middleware('auth.basic.once');

Route::put('v1/catalog/{id}/rent', 'APICatalogController@putRent');
Route::put('v1/catalog/{id}/return', 'APICatalogController@putReturn');
