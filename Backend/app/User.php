<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Startup;

class User extends Authenticatable
{
    use Notifiable;

    const VERIFIED_USER = '1';
    const UNVERIFIED_USER = '0';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 
        'email', 
        'password',
        'verified',
        'verification_token',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 
        'remember_token',
        'verification_token'
    ];

    /** 
     * Relationships
    */
    public function role () 
    {
        return $this->belongsTo('App\Role');
    }

    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }

    /*+
     * Method verified
    */
    public function isVerified () {
        return $this->verified == User::VERIFIED_USER;
    }

    /*+
     * generate token
    */
    public static function generateVerificationToken () {
        return str_random(40);
    }
}
