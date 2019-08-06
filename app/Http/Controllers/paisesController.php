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
}
