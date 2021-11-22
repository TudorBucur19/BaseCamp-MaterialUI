import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Campgrounds.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { FaCampground } from "react-icons/fa";
import CampCard from '../CampCard/CampCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import PrimarySearchAppBar from '../navbar/AppBar';
import HeaderBanner from '../Common/HeaderBanner';




const Campgrounds = () => {
    const { campgroundsList } = useContext(CampgroundsContext);
    const { url } = useRouteMatch();
    

    return ( 
        <Container component="main" disableGutters={true} maxWidth="false">
            <PrimarySearchAppBar/>
            <Container maxWidth="lg" mt={4} sx={{marginTop: '30px'}}>
                <HeaderBanner/>

                <Box  py={4}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {campgroundsList &&
                            campgroundsList.map((campground)=> 
                            <Grid item xs={12} sm={6} md={3}>
                                <CampCard {...{campground, url}}/>
                            </Grid>
                            )
                        }                    
                    </Grid>
                </Box>

            </Container>
        </Container>
     );
}
 
export default Campgrounds;