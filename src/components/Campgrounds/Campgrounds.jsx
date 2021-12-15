import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FaCampground } from "react-icons/fa";

import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import CampCard from '../CampCard/CampCard';
import PrimarySearchAppBar from '../navbar/AppBar';
import HeaderBanner from '../Common/HeaderBanner';
import HeaderStripe from 'components/Common/HeaderStripe';
import MapBanner from '../MapBanner/MapBanner';


const Campgrounds = () => {
    const { campgroundsList } = useContext(CampgroundsContext);
    const { url } = useRouteMatch();    

    return ( 
        <Container component="main" disableGutters={true} maxWidth="false">
            <PrimarySearchAppBar/>
            <Container maxWidth="lg" mt={4} sx={{marginTop: '30px'}}>
                <MapBanner campsList={campgroundsList} width="100%" height="400px" icon={FaCampground}/>
                <HeaderStripe/>

                <Box  py={4}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {campgroundsList &&
                            campgroundsList.map((campground) => 
                            <Grid item xs={12} sm={6} md={3} key={campground.id}>
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