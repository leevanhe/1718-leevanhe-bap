<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\CategoryStartup::class, function (Faker $faker) {
    $category = App\Category::pluck('id')->all();
    $startup = App\Startup::pluck('id')->all();
    return [
        'startup_id' => $faker->randomElement($startup),
        'category_id' => $faker->randomElement($category)
    ];
});
