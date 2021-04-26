<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Films extends Controller
{
    //
    function getFilms() { 
        return Http::get('https://swapi.dev/api/films/');
    }

    function getFilm($id) { 
        return Http::get('https://swapi.dev/api/films/' + $id);
    }

}