<?php

use Faker\Generator as Faker;

$factory->define(App\Startup::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'description' => $faker->text($maxNbChars = 1000),
        'avatar' => $faker->randomElement(['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']),
        'start' => $faker->dateTime($max = 'now'),
        'website' => $faker->url,
        'employees' => $faker->numberBetween($min = 4, $max = 30),
        'adresses_id' => App\Adresses::all()->random()->id,
        'user_id' => factory(App\User::class)->create()->id,
    ];
});
