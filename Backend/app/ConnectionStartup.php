<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConnectionStartup extends Model
{
    protected $fillable = [
        'connection_id',
        'startup_id'
    ];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'connection_startup';

     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
