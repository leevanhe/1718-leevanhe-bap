<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Startup;
use App\Services;

class Realisations extends Model
{
    protected $fillable = [
        'description',
        'startup_id',
        'service_id'
    ];

    /** 
     * Relationships
    */
    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
