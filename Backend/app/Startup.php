<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Adresses;
use App\Category;
use App\User;

class Startup extends Model
{
    protected $fillable = [
        'name',
        'startdate',
        'website',
        'employees',
        'image',
        'adresses_id',
        'user_id'
    ];

    /** 
     * Relationships
    */
    public function adres()
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
}
