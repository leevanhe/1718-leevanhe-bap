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
        $user = User::where(['username' => 'Admin'])->first();
        $adress = Adresses::where(['line1' => 'Industrieweg 232'])->first();
        DB::table('startups')->insert([
            'name' => 'Test bedrijf',
            'description' => 'De Arteveldehogeschool is een katholieke hogeschool. De Arteveldehogeschool in Gent biedt diverse bacheloropleidingen aan, alsook bachelor-na-bacheloropleidingen, postgraduaten en bijscholingen en studiedagen.',
            'avatar' => '1.jpg',
            'website' => 'https://www.arteveldehogeschool.be/',
            'employees' => 90,
            'start' => '2016-06-16',
            'adresses_id' => $adress->id,
            'user_id' => $user->id,
        ]);

        factory(App\Startup::class, 60)->create();
    }
}
