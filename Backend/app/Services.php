<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;

class Services extends Model
{
    protected $fillable = [
        'description',
        ('title'),
        'city',
        'startup_id'
    ];

    /** 
     * Relationships
    */
    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
