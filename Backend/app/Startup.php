<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Adresses;
use App\Category;
use App\CategoryStartup;
use App\User;
use App\Event;
use App\Realisations;
use App\Services;
use App\Post;
use App\Startup;
use App\Comment;

class Startup extends Model
{
    protected $fillable = [
        'name',
        'start',
        'avatar',
        'description',
        'website',
        'employees',
        'adresses_id',
        'user_id'
    ];

    /** 
     * Relationships
    */
    public function adresses()
    {
        return $this->belongsTo(Adresses::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
       return $this->belongsTo(User::class); 
    }

    public function event()
    {
        return $this->hasMany(Event::class);
    }

    public function realisations()
    {
        return $this->hasMany(Realisations::class);
    }

    public function services()
    {
        return $this->hasMany(Services::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Connections
     */
    public function connections()
	{
		return $this->belongsToMany(Startup::class, 'connection_startup', 'startup_id', 'connection_id');
	}

	public function addConnection(Startup $startup)
	{
		$this->connections()->attach($startup->id);
	}

	public function removeConnection(Startup $startup)
	{
		$this->connections()->detach($startup->id);
    }
    
    /**
     * Recommendations
     */
    public function recommendations()
	{
		return $this->belongsToMany(Startup::class, 'recommendation_startup', 'startup_id', 'recommendation_id');
	}

	public function addRecommendation(Startup $startup)
	{
		$this->recommendations()->attach($startup->id);
	}

	public function removeRecommendation(Startup $startup)
	{
		$this->recommendations()->detach($startup->id);
	}

    /**
     * Query
     */

    public function scopeInfo($query)
    {
        return $query->with('user', 'adresses');
    }
}
