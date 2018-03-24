<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CategoryStartup extends Pivot
{
    protected $fillable = [
        'category_id',
        'startup_id'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category_startup';

     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
