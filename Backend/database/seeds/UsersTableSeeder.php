<?php

use Illuminate\Database\Seeder;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::where('name', '=', 'startup')->first();
        DB::table('users')->insert([
            'username' => 'test',
            'role_id' => 3,
            'password' => bcrypt('welkom'),
        ]);
    }
}
