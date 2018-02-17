<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Role extends Model
{
    protected $fillable = [
        'name'
    ];

    /** 
     * Get the user
    */
    public function User()
    {
        return $this->hasMany(User::class);
    }
}
