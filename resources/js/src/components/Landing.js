
import React, { Component } from 'react';
import './home.css';
import Person from './Person';
import Planet from './Planet';
import Starship from './Starship';
import Search from './Search';
import Menu from './Menu';


class Landing extends Component {
    constructor(props){ 
        super(props);
        this.state = { 
            items: [],      
        }
    }


    
    render() {

        return ( 
        <div className="home__container">
                <div className="container landing p-5 col-md-12 mb-5">
                    <div className="col-md-12 p-5 text-center p-5">
                        <div className="col-md-6 mx-auto">
                            <h1>Star Wars World</h1>
                            <h5>a long time ago in a galaxy far far away...</h5>
                            <div className="p-5">
                                <button className="btn btn-dark" onClick={() => { 
                                 $('html,body').animate({ scrollTop: 9999 }, 'slow');
                                }}>Click to begin...</button>
                            </div>
                        </div>
                    </div>  
                    <div>
        </div>
                  
                </div>

            <Menu />
            </div>
        );
    }
}

export default Landing
