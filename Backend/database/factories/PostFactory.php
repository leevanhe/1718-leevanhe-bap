<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    return [
        'description' => $faker->text($maxNbChars = 600),
        'startup_id' => $faker->randomElement($startup)
    ];
});
