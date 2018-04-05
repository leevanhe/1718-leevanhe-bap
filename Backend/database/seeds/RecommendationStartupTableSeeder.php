<?php

use Illuminate\Database\Seeder;

class RecommendationStartupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\RecommendationStartup::class, 20)->create();
    }
}
