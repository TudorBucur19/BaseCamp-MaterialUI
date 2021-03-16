import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './Navbar.scss';


const Navbar = () => {
    const { user, handleLogout } = useContext(AuthenticationContext);

    return ( 
        <div className="container">
            <nav className="nav">
                <Link to="/campgrounds">
                    <a className="nav__logo">BaseCamp</a>
                </Link>  

                <ul className="nav__menu-items">
                    {user ?
                        <Link>
                            <li onClick={handleLogout}>Logout</li>
                        </Link>                         
                        :
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    }
                    
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>                              
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;