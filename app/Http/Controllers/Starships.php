<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Starships extends Controller
{
    //
    function getStarships() { 
        return Http::get('https://swapi.dev/api/starships');
    }
}
