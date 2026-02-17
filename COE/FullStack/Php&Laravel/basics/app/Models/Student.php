<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';

    protected $primaryKey = 'rollno';   // Custom primary key
    public $incrementing = false;        // rollno is not auto-increment
    protected $keyType = 'string';       // rollno is string

    protected $fillable = [
        'rollno',
        'name',
        'email',
        'department'
    ];
}
