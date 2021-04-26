<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Planets extends Controller
{
    //
    function getPlanets() { 
        return Http::get('https://swapi.dev/api/planets');
    }
}
