<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    $adress = App\Adresses::pluck('id')->all();
    return [
        'name' => $faker->name,
        'description' => $faker->text($maxNbChars = 1000),
        'start' => $faker->dateTimeThisYear($max = 'now'),
        'end' => $faker->dateTimeThisYear($max = 'now'),
        'adresses_id' => $faker->randomElement($adress),
        'startup_id' => $faker->randomElement($startup),
    ];
});
