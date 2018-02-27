<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Adresses;
use App\Category;
use App\User;
use App\Event;

class Startup extends Model
{
    protected $fillable = [
        'name',
        'start-date',
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
       return $this->hasOne(User::class); 
    }

    public function event()
    {
        return $this->hasMany(Event::class);
    }
}
