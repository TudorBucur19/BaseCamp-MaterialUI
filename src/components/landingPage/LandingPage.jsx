import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
    return ( 
        <div className="landing">
            <div className="landing__header">
                <h1>Welcome to BaseCamp!</h1>
                <Link to="/campgrounds">
                    <span>View all campgrounds</span>
                </Link>
                
            </div>

            <ul class="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
     );
}
 
export default LandingPage;