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

    public function eliminarProvincia(Request $request){

    	DB::table('provincias')
    	->where('id', '=', $request->id_provincia)
    	->delete();
    }

    public function editarProvincia(Request $request){
    	DB::table('provincias')
    	->where('id', '=', $request->id_provincia)
    	->update([
    		'nombre' => $request->nombre,
    		'pais_id' => $request->pais_id,
    	]);
    }

    public function agregarProvincia(Request $request){
        DB::table('provincias')
        ->insert([
            'id' => null,
            'nombre' => $request->nombre,
            'pais_id' => $request->pais_id,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }
}
