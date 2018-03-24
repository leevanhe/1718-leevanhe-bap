<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecommendationStartup extends Model
{
    protected $fillable = [
        'recommendaton_id',
        'startup_id'
    ];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recommendation_startup';

     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
