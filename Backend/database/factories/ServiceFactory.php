<?php

use Faker\Generator as Faker;

$factory->define(App\Services::class, function (Faker $faker) {
    return [
        'description' => $faker->text($maxNbChars = 600),
        'city' => $faker->city,
        'startup_id' => App\Startup::all()->random()->id,
    ];
});
