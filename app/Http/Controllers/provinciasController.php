<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class provinciasController extends Controller
{
    public function mostrarProvincias($id){
    	$provincias = DB::table('provincias')
    	->select('*')
    	->where('pais_id','=',$id)
    	->get();

    	return response()->json($provincias, 201);
    }
}
