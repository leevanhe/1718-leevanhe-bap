<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    /** 
     * Relationships
    */
    public function likeable()
    {
        return $this->morphTo();
    }
}
