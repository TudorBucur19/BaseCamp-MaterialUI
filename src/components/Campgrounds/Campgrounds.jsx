import React, { useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FaCampground } from "react-icons/fa";

import { CampgroundsContext } from 'contexts/CampgroundsContext';
import CampCard from 'components/CampCard/CampCard';
import PrimarySearchAppBar from 'components/navbar/AppBar';
import HeaderStripe from 'components/Common/HeaderStripe';
import MapBanner from 'components/MapBanner/MapBanner';


const Campgrounds = () => {
    const { campgroundsList, currentPosition, searchWord } = useContext(CampgroundsContext);
    const { url } = useRouteMatch();    

    const foundResults = campgroundsList && campgroundsList.filter(
        result => result.campground.name.toLowerCase().includes(searchWord.searchWord.toLowerCase())
    );

    return ( 
        <Container component="main" disableGutters={true} maxWidth="false">
            <PrimarySearchAppBar/>
            <Container maxWidth="lg" mt={4} sx={{marginTop: '30px'}}>
                <MapBanner 
                width="100%" 
                height="400px"
                campsList={campgroundsList}  
                {...{currentPosition}}
                />
                <HeaderStripe/>
                {foundResults.length ?
                <Box  py={4}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {foundResults &&
                            foundResults.map((campground) => 
                            <Grid 
                            key={campground.id}
                            item 
                            xs={12} 
                            sm={6} 
                            md={3} 
                            >
                                <CampCard {...{campground, url}}/>
                            </Grid>
                            )
                        }                    
                    </Grid>
                </Box>
                :
                <Typography>Sorry! No results :(</Typography>
                }
            </Container>
        </Container>
     );
}
 
export default Campgrounds;