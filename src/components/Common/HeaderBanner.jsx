import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { FaCampground } from "react-icons/fa";
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const HeaderBanner = () => {
    const { user } = useContext(AuthenticationContext);
    return ( 
        <Box 
        display="flex"
        flexDirection="column"
        component="div" 
        bgcolor="rgb(229, 228, 226)" 
        borderRadius={2}
        p={4}
        alignItems={{xs: 'center', sm: 'flex-start'}}
        >
            <Typography 
            variant="h3" 
            component="h1" 
            mb={1} 
            fontFamily="RocknRoll One" 
            textAlign={ {xs: "center", sm: "left"}}
            >
                <FaCampground/>
                Wellcome to BaseCamp
            </Typography>

            <Typography 
            variant="h5" 
            component="h2" 
            mb={{xs: 4, md: 8}} 
            textAlign={{xs: "center", sm: "left"}}
            >
                View all the hand-pick campgrounds around the world
            </Typography>
            
            {user && 
            <Button 
            startIcon={<AddOutlinedIcon/>} 
            variant="contained" 
            color="secondary"
            size="large"
            href="/newcampground">
                Add new campground
            </Button>
            }
        </Box>
     );
}
 
export default HeaderBanner;