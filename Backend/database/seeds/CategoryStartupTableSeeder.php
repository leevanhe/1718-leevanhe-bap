<?php

use Illuminate\Database\Seeder;

class CategoryStartupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\CategoryStartup::class, 10)->create();
    }
}
