import React from 'react';
import Box from '@mui/material/Box';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Typography from '@mui/material/Typography';

const SearchResultsMessage = () => {
    return ( 
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={6} >
            <SearchOffIcon fontSize="large"/>
            <Typography variant="h4" textAlign="center">no results matching your search!</Typography>
        </Box>
     );
}
 
export default SearchResultsMessage;