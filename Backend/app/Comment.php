<?php

namespace App;
use App\Startup;
use App\Post;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'description',
        'post_id',
        'startup_id'
    ];

    /** 
     * Relationships
    */
    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
