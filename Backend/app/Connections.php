<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Connections extends Model
{
    const PENDING_CONNECTION = 'Pending';
    const DECLINED_CONNECTION = 'Declined';
    const ACCEPTED_CONNECTION = 'Accepted';

    protected $fillable = [
        'status'
    ];

    public function ConnectionStatus () {
        return $this->status == Connections::PENDING_CONNECTION;
    }
}
