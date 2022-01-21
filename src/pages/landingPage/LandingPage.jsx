import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import { Typography, Button } from '@mui/material';

const LandingPage = () => {

    return ( 
        <div className="landing">
            <div className="landing__header">
                <Typography component="h1" variant="h3" fontFamily="RocknRoll One" fontWeight="bold" mb={3}>Welcome to BaseCamp!</Typography>
                <Link to="/campgrounds">
                    <Button variant="contained" color="secondary" size="large">View all campgrounds</Button>
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