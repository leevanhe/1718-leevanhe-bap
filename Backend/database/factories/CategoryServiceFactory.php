<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\CategoryService::class, function (Faker $faker) {
    $category = App\Category::pluck('id')->all();
    $service = App\Services::pluck('id')->all();
    return [
        'services_id' => $faker->randomElement($service),
        'category_id' => $faker->randomElement($category)
    ];
});
