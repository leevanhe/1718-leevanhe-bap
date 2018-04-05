<?php

use Illuminate\Database\Seeder;

class CategoryServiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\CategoryService::class, 30)->create();
    }
}
