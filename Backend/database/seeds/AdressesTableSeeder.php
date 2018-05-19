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
            'line1' => 'Industrieweg 232',
            'city' => 'Gent',
            'ZIP' => '9030',
            'country' => 'Belgium'
        ]);

        factory(App\Adresses::class, 50)->create();
    }
}
