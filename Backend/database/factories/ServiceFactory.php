<?php

use Faker\Generator as Faker;

$factory->define(App\Services::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    return [
        'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'description' => $faker->text($maxNbChars = 600),
        'city' => $faker->city,
        'startup_id' => $faker->randomElement($startup),
    ];
});
