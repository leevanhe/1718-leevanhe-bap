<?php

use Illuminate\Database\Seeder;

class StartupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Startup::class, 10)->create();
    }
}
