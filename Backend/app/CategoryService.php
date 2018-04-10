<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryService extends Model
{
    protected $fillable = [
        'category_id',
        'services_id'
    ];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category_services';

     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
