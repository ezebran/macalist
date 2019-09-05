<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class usersController extends Controller
{
    public function mostrarUsuarios(){
        $usuarios = DB::table('users')
        ->join('localidades','localidades.id','=','users.localidad_id')
        ->join('provincias','provincias.id','=','localidades.provincia_id')
        ->join('paises','paises.id','=','provincias.pais_id')
        ->join('roles','roles.id','=','users.rol_id')
        ->select('users.*','localidades.nombre_l','provincias.nombre_pr','paises.nombre_p','roles.nombre')
        ->get();

        return response()->json($usuarios, 201);
    }

    public function eliminarUsuario(Request $request){
    	DB::table('users')
    	->where('id', '=', $request->id_user)
    	->delete();
    }

    public function editarUsuario(Request $request){
    	DB::table('users')
    	->where('id', '=', $request->id_user)
    	->update([
    		'name' => $request->name,
    		'email' => $request->email,
    		'rol_id' => $request->rol_id,
    		'localidad_id' => $request->localidad_id
    	]);
    }
}
