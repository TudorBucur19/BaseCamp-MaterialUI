import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                <Link to="/">
                    <a className="nav__logo">BaseCamp</a>
                </Link>                
                <ul className="nav__menu-items">
                    <li>Login</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;