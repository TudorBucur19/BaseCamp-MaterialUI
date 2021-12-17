import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { FaCampground } from "react-icons/fa";

import { AuthenticationContext } from 'contexts/AuthenticationContext';

const HeaderStripe = () => {
    const { user } = useContext(AuthenticationContext);
    return ( 
        <Box 
        display="flex"
        flexDirection={{xs: 'column', md: 'row'}}
        justifyContent="space-between"
        component="div" 
        py={1}
        alignItems={{xs: 'center', md: 'flex-end'}}
        >
            <Box 
            display="flex" 
            alignItems="center"
            mb={{xs: 2, md: 0}}
            >
                <FaCampground size="2.125rem"/>
                <Typography 
                ml={2}
                variant={{xs: "h6", md: "h4"}} 
                component="h1"  
                fontFamily="RocknRoll One" 
                textAlign={ {xs: "center", md: "left"}}
                >                
                    All Campgrounds
                </Typography>
            </Box>
            
            {user && 
            <Button 
            startIcon={<AddOutlinedIcon/>} 
            variant="contained" 
            color="secondary"
            size="large"
            href="/newcampground"
            >            
                Add new campground
            </Button>
            }
        </Box>
     );
}
 
export default HeaderStripe;