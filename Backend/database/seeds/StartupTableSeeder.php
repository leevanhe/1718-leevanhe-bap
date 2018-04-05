<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Adresses;

class StartupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where(['username' => 'leevanhe'])->first();
        $adress = Adresses::where(['line1' => 'Gentdam 27'])->first();
        DB::table('startups')->insert([
            'name' => 'SeakClothing',
            'description' => 'dit is een beschrijving',
            'avatar' => '1.jpg',
            'website' => 'http://www.seak-clothing.be',
            'employees' => 2,
            'start' => '2016-06-16',
            'adresses_id' => $adress->id,
            'user_id' => $user->id,
        ]);

        factory(App\Startup::class, 60)->create();
    }
}
