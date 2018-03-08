<?php

use Faker\Generator as Faker;

$factory->define(App\Startup::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'description' => $faker->text($maxNbChars = 1000),
        'start' => $faker->dateTime($max = 'now'),
        'website' => $faker->url,
        'employees' => $faker->numberBetween($min = 4, $max = 30),
        'image' => $faker->randomElement(['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']),
        'adresses_id' => App\Adresses::all()->random()->id,
        'user_id' => factory(App\User::class)->create()->id,
    ];
});
