import React from 'react';
import './Navbar.scss';
import '../../scss/variables.scss';

const Navbar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                <div className="nav__logo">BaseCamp</div>
                <ul className="nav__menu-items">
                    <li>Login</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;