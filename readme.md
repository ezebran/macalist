# ⚙️ Un vistazo a MACALIST 

_El sistema consta de un LogIn y Register, utilizando **JWT**, el cual tiene 2 tipos de usuarios, **root** y **normal** , en el cual root, tiene acceso a todas las funcionalidades del sistema, mientras que normal solo puede ver los usuarios y su perfil, root tiene CRUD( Create, Read, Update, Delete) para con el listado de Paises, Provincias y Localidades, a la hora de elimnar un pais, se eliminan las provincias, localidades y usuarios vinculados a este, lo mismo con las provincias y localidades._

## 📋 Pasos para el desarrollo

* **Diseño de la UI** - *User interface* -
_Arme un boceto rapido en Photoshop, no queria esforzarme mucho en esta etapa, pues concideraba que la parte del codigo iba a ser lo mas importante_

* **Desarrollo de la UI** - *User interface development* -
_El desarrollo de la UI lo hice primero y por separado, pues concidero que es mas rapido hacerlo de esta forma. Despues solo tocaba adaptar el HTML a la sintaxis de React_

* **Desarrollo del BackEnd** - *Backend development* -
_Para este proyecto decidi usar laravel, en su version 5.8, dado que es el framework de PHP que mejor conozco.

* **Desarrollo del FrontEnd** - *FrontEnd development* -
_En este caso decidi usar React como tecnologia frontend, decidi usar el [Scaffolding para react](https://laravel.com/docs/5.8/frontend#using-react) que trae laravel, aclaro que de igual manera el frontend lo consume al backend como una API._

* **Implementacion de JWT** - *Json Web Token* -
_Para ser sincero, nunca habia usado esta tecnologia, asi que busque como implementarla con Laravel y React, y encontre [este post](https://medium.com/@Gbxnga/token-based-authentication-with-react-and-laravel-restful-api-83f16581e85) en Medium, que me sirvio muchisimo, apoyando me con la documentacion de laravel para algunas cosas_


## 🛠️ Tecnologias usadas

* **HTML - CSS** - Para el desarrollo de la UI
* [SASS](https://sass-lang.com/) - Como pre-procesador de CSS 
* [GULP](https://gulpjs.com/) - Como task runner, para el desarrollo inicial de la UI
* [XAMPP](https://www.apachefriends.org/es/index.html) - Como auth token
* [Laravel 5.8](https://laravel.com/) - Para el desarrollo del backend
* [React](https://es.reactjs.org/) - Para el desarrollo del FrontEnd
* [JWT](https://jwt.io/) - Como auth token

## 📦 Instalación

* Primero que nada deberiamos instalar laravel en su version 5.8, asumo que esta parte no es necesaria detallar de todas formas les dejo los pasos desde la [documentacion de laravel](https://laravel.com/docs/5.8#installation) en esta instancia recomiendo reemplazar los archivos generados por los archivos del repositorio.

* Una vez instalado laravel seguimos los pasos [para usar react](https://laravel.com/docs/5.8/frontend#using-react) parandonos en la raiz del proyecto con una consola/CMD, y tipiamos el siguiente comando:

```
php artisan preset react
```

* Ahora instalamos los paquetes de react con NPM (Con solo instalar nodejs ya lo tenemos disponible), recomiendo que lo hagan con el **package.json** del repositorio, ya que le quite el ^ para que instale exactamente las mismas versiones de las dependencias que estan en el sistema, simplemente tipiando el siguiente comando en el CMD

```
npm install
```

* Ahora la instalacion de JWT recomiendo que se la haga siguiendo [este tutorial](https://medium.com/@Gbxnga/token-based-authentication-with-react-and-laravel-restful-api-83f16581e85) o al menos solo para descargar los archivos de JWT necesario y usar los archivos del repositorio para evitar errores

* Una vez listo el sistema pasamos a la base de datos, en este caso use una base de datos SQL, la misma debe llamarse **macalist_db**

* En este punto el sistema deberia estar instalado pero vacio, para eso prepare unas [seeds](https://laravel.com/docs/5.8/seeding) las cuales debemos ejutarlas en el siguiente orden

```
php artisan db:seed --class=RolTableSeeder
```

```
php artisan db:seed --class=PaisesTableSeeder
```

```
php artisan db:seed --class=ProvinciasTableSeeder
```

```
php artisan db:seed --class=LocalidadesTableSeeder
```

```
php artisan db:seed --class=UsersTableSeeder
```

* Ahora resta levantar el server y react, en dos consolas/CMD diferentes, en una para laravel tipiamos el comando:

```
php artisan serve
```

y en la otra

```
npm run watch
```

*Ahora solo resta logearse con el **usuario: root - constraseña: root** y listo.
