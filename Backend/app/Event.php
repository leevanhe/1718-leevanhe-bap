<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;
use App\Adres;

class Event extends Model
{
    protected $fillable = [
        'name',
        'description',
        'start',
        'end',
        'adresses_id',
        'startup_id'
    ];

    /** 
     * Relationships
    */
    public function adresses()
    {
        return $this->belongsTo(Adresses::class);
    }

    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }
}
