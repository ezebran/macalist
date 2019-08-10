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
}
