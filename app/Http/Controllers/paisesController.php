<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class paisesController extends Controller
{
    public function mostrarPaises(){
    	$paises = DB::table('paises')
    	->select('*')
    	->get();

    	return response()->json($paises, 201);
    }

    public function eliminarPais(Request $request){

    	DB::table('paises')
    	->where('id', '=', $request->id_pais)
    	->delete();
    }

    public function editarPais(Request $request){

    	DB::table('paises')
    	->where('id', '=', $request->id_pais)
    	->update(['nombre' => $request->nombre]);
    }

    public function agregarPais(Request $request){
        DB::table('paises')
        ->insert([
            'id' => null,
            'nombre' => $request->nombre,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }
}
