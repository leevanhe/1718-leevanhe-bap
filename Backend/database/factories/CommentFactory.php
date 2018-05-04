<?php

use Faker\Generator as Faker;

$factory->define(App\Comment::class, function (Faker $faker) {
    $startup = App\Startup::pluck('id')->all();
    $post = App\Post::pluck('id')->all();
    return [
        'description' => $faker->text($maxNbChars = 1000),
        'post_id' => $faker->randomElement($post),
        'startup_id' => $faker->randomElement($startup),
    ];
});
