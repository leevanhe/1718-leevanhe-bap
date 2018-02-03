<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /** 
     * The table associated with the model.
     * 
     * @var string  
    */
    protected $table = 'roles';

    /** 
     * Get the user
    */
    public function User()
    {
        return $this->hasMany('App\User');
    }
}
