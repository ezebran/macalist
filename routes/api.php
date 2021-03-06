<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::any('/', function () {
    //
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
});
Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
});


Route::get('/usuarios/mostrar','usersController@mostrarUsuarios');

Route::post('/usuarios/eliminar','usersController@eliminarUsuario');

Route::post('/usuarios/editar','usersController@editarUsuario');

Route::get('/perfil/{id}','usersController@perfil');


Route::get('/paises/mostrar','paisesController@mostrarPaises');

Route::post('/pais/eliminar','paisesController@eliminarPais');

Route::post('/pais/editar','paisesController@editarPais');

Route::post('/pais/agregar','paisesController@agregarPais');


Route::post('/provincia/eliminar','provinciasController@eliminarProvincia');

Route::post('/provincia/editar','provinciasController@editarProvincia');

Route::get('/pais/{id}','provinciasController@mostrarProvincias');


Route::post('/provincia/agregar','provinciasController@agregarProvincia');


Route::get('/pais/provincia/{id}','localidadesController@mostrarLocalidades');

Route::post('/localidad/eliminar','localidadesController@eliminarLocalidad');

Route::post('/localidad/editar','localidadesController@editarLocalidad');

Route::post('/localidad/agregar','localidadesController@agregarLocalidad');
