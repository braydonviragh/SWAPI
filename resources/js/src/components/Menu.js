
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './home.css';
import Person from './Person';
import Planet from './Planet';
import Starship from './Starship';
import Search from './Search';
import Result from './Result';


class Menu extends Component {
    constructor(props){ 
        super(props);
        this.state = { 
            items: [],
        }
   
    }

    render() {

    
        return ( 
        <div className="menu__container pt-5">
                <div className="icons container text-center col-md-12">
                    <div className="row pt-5 px-5">
                        <div className="col-md-4 p-1">
                            <img src="/img/stormtrooper.png" alt="Person" id="people" /> 
                            <div className="p-3">
                                <NavLink exact to='/'>
                                    <button className="btn btn-dark"> People </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <img src="/img/spaceship.png" alt="Starship" id="spaceship"/>
                            <div className="p-3">
                            <NavLink exact to='/Starships'>  
                                <button className="btn btn-dark"> Starships </button>
                            </NavLink>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <img src="/img/planet.png" alt="Starship" id="planet"/>
                            <div className="p-3">
                            <NavLink exact to='/Planets'>  
                                <button className="btn btn-dark"> Planets </button>
                            </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
               <hr />
            </div>
        );
    }
}

export default Menu