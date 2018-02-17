<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;
use App\Adresses;

class Event extends Model
{
    protected $fillable = [
        'name',
        'description',
        'start-date',
        'end-date',
        'adresses_id',
        'startup_id'
    ];

    /** 
     * Relationships
    */
    public function adres()
    {
        return $this->belongsTo(Adresses::class);
    }

    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }
}
