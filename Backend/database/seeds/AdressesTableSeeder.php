<?php

use Illuminate\Database\Seeder;

class AdressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Adresses::class, 10)->create();
    }
}
