<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class localidadesController extends Controller
{
    public function mostrarLocalidades($id){
    	$localidades = DB::table('localidades')
    	->select('*')
    	->where('provincia_id','=',$id)
    	->get();

    	return response()->json($localidades, 201);
    }

    public function eliminarLocalidad(Request $request){
    	DB::table('localidades')
    	->where('id', '=', $request->id_localidad)
    	->delete();
    }

    public function editarLocalidad(Request $request){
    	DB::table('localidades')
    	->where('id', '=', $request->id_localidad)
    	->update([
    		'nombre' => $request->nombre,
    		'provincia_id' => $request->provincia_id,
    	]);
    }
}
