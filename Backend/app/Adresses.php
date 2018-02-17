<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;
use App\Event;

class Adresses extends Model
{
    protected $fillable = [
        'line1',
        'city',
        'ZIP',
        'country'
    ];

    /** 
     * Relationships
    */
    public function startup()
    {
        return $this->hasMany(Startup::class);
    }

    public function event()
    {
        return $this->hasMany(Event::class);
    }
}
