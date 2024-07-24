<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'account_num','account_name','initial_balance','balance','note','created_at', 'updated_at', 'deleted_at'
    ];

    protected $casts = [
        'initial_balance' => 'double',
        'balance' => 'double',
    ];
}
