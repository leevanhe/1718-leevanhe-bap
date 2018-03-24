<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;
use App\Services;
use App\CategoryStartup;

class Category extends Model
{

    protected $fillable = [
        'name'
    ];

    /** 
     * Relationships
    */
    public function startups()
    {
        return $this->belongsToMany(Startup::class);
    }

    public function services()
    {
        return $this->belongsToMany(Services::class);
    }
}
