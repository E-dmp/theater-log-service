<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Bord extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'delete_flag'
    ];
    protected $casts = [
        'delete_flag' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
