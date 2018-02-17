<?php

use Faker\Generator as Faker;

$factory->define(App\Adresses::class, function (Faker $faker) {
    return [
        'line1' => $faker->streetAddress,
        'city' => $faker->city,
        'ZIP' => $faker->postcode,
        'country' => $faker->country,
    ];
});
