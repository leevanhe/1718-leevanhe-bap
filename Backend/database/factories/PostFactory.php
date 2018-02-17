<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'description' => $faker->text($maxNbChars = 600),
        'startup_id' => App\Startup::all()->random()->id
    ];
});
