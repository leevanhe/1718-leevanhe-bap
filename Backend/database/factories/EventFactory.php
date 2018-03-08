<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text($maxNbChars = 1000),
        'start' => $faker->dateTimeThisYear($max = 'now'),
        'end' => $faker->dateTimeThisYear($max = 'now'),
        'adresses_id' => App\Adresses::all()->random()->id,
        'startup_id' => App\Startup::all()->random()->id,
    ];
});
