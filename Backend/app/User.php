<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Startup;
use App\Role;


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
        'password',
        'avatar',
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
        return $this->belongsTo(Role::class);
    }

    public function startup()
    {
        return $this->hasOne(Startup::class);
    }

    /**
     * Connections
     */
    public function connections()
	{
		return $this->belongsToMany('User', 'connections_users', 'user_id', 'connection_id');
	}

	public function addConnection(User $user)
	{
		$this->connections()->attach($user->id);
	}

	public function removeConnection(User $user)
	{
		$this->connections()->detach($user->id);
    }
    
    /**
     * Recommendations
     */
    public function recommendations()
	{
		return $this->belongsToMany('User', 'recommendations_users', 'user_id', 'recommendation_id');
	}

	public function addRecommendation(User $user)
	{
		$this->recommendations()->attach($user->id);
	}

	public function removeRecommendation(User $user)
	{
		$this->recommendations()->detach($user->id);
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
