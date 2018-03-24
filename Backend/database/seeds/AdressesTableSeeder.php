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
        DB::table('adresses')->insert([
            'line1' => 'Gentdam 27',
            'city' => 'Lokeren',
            'ZIP' => '9160',
            'country' => 'Belgium'
        ]);

        factory(App\Adresses::class, 10)->create();
    }
}
