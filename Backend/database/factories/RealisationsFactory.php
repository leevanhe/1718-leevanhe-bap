<?php

use Faker\Generator as Faker;

$factory->define(App\Realisations::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    $service = App\Services::pluck('id')->all();
    return [
        'name' =>  $faker->name,
        'description' => $faker->text($maxNbChars = 600),
        'startup_id' => $faker->randomElement($startup),
        'service_id' => $faker->randomElement($service)
    ];
});
