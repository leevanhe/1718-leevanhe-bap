<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->name,
        'start-date' => $faker->dateTime($max = 'now', $timezone = 'Europe/Brussels'),
        'start-date' => $faker->dateTime($max = '+6 months', $timezone = 'Europe/Brussels'),
        'adresses_id' => App\Adresses::all()->random()->id,
        'startup_id' => App\Startup::all()->random()->id,
    ];
});
