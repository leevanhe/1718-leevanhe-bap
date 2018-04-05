<?php

use Illuminate\Database\Seeder;

class RealisationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Realisations::class, 20)->create();
    }
}
