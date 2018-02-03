<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['admin', 'bedrijf', 'startup'];
        foreach($roles as $r){
            DB::table('roles')->insert([
                'name' => $r,
                'active' => true,
            ]);
        }
    }
}
