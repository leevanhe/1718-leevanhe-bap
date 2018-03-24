<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryService extends Model
{
    protected $fillable = [
        'category_id',
        'service_id'
    ];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category_service';

     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
