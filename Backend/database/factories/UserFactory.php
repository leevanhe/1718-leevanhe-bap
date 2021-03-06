<?php

use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
    $role = App\Role::pluck('id')->all();
    return [
        'username' => $faker->userName,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'verified' => $verified = $faker->randomElement([App\User::VERIFIED_USER,App\User::UNVERIFIED_USER]),
        'verification_token' => $verified == App\User::VERIFIED_USER ? null : App\User::generateVerificationToken(),
        'remember_token' => str_random(10),
        'role_id' => $faker->randomElement($role)
    ];
});
