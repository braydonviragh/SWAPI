import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'



function Navbar() {
    const[click, setClick] = useState(false);
    return (
        
        <div className='navbar__container'>
             <div className="header__container navbar px-5">
                
                    <NavLink exact to='/' className="home__icon" activeClassName="active">
                        <div className="header__logo navlink">
                            <img src="/img/logo.png" alt="logo"/>                      
                        </div>
                    </NavLink>
            </div>     
        </div>
    )
}

export default Navbar