<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
        $role = Role::where(['name' => 'admin'])->first();
        DB::table('users')->insert([
            'username' => 'Admin',
            'password' => bcrypt('Admin'),
            'role_id' => $role->id
        ]);
    }
}
