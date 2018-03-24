<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\ConnectionStartup::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    return [
        'connection_id' => $faker->unique()->randomElement($startup),
        'startup_id' => $faker->randomElement($startup)
    ];
});
