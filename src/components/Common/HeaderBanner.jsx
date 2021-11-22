import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { FaCampground } from "react-icons/fa";

const HeaderBanner = () => {

    return ( 
        <Box 
        component="div" 
        bgcolor="rgb(229, 228, 226)" 
        borderRadius={2}
        p={4}
        >
            <Typography variant="h3" component="h1" mb={1} fontFamily="RocknRoll One"><FaCampground/>Wellcome to BaseCamp</Typography>
            <Typography variant="h5" component="h2" mb={8}>View all the hand-pick campgrounds around the world</Typography>
            <Button 
            startIcon={<AddOutlinedIcon/>} 
            variant="contained" 
            color="secondary"
            size="large"
            href="/newcampground">
                Add new campground
            </Button>
        </Box>
     );
}
 
export default HeaderBanner;