<?php

use Faker\Generator as Faker;

$factory->define(App\Realisations::class, function (Faker $faker) {
    return [
        'description' => $faker->text($maxNbChars = 600),
        'startup_id' => App\Startup::all()->random()->id,
        'service_id' => App\Startup::all()->random()->id
    ];
});
