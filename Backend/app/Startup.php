<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Adresses;
use App\Category;
use App\User;
use App\Event;
use App\Realisations;
use App\Services;

class Startup extends Model
{
    protected $fillable = [
        'name',
        'start',
        'description',
        'website',
        'employees',
        'image',
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

    public function category()
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
}
