<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleTableSeeder::class,
            UsersTableSeeder::class,
            AdressesTableSeeder::class,
            CategoryTableSeeder::class,
            StartupTableSeeder::class,
            EventTableSeeder::class,
            PostTableSeeder::class,
            ServicesTableSeeder::class,
            RealisationsTableSeeder::class,
            CategoryStartupTableSeeder::class,
            CategoryServiceTableSeeder::class,
        ]);
    }
}
