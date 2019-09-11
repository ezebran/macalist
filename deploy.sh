# Run database migrations
php artisan migrate:fresh

# Run Seeds

php artisan db:seed --class=RolTableSeeder

php artisan db:seed --class=PaisesTableSeeder

php artisan db:seed --class=ProvinciasTableSeeder

php artisan db:seed --class=LocalidadesTableSeeder

php artisan db:seed --class=UsersTableSeeder