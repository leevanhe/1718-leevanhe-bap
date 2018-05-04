<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;

class Post extends Model
{
    protected $fillable = [
        'description',
        'startup_id'
    ];

    /** 
     * Relationships
    */
    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
