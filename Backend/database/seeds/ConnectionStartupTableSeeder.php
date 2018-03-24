<?php

use Illuminate\Database\Seeder;

class ConnectionStartupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ConnectionStartup::class, 5)->create();
    }
}
