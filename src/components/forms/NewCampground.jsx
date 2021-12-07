import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PrimarySearchAppBar from '../navbar/AppBar';
import ImageThumbnail from '../Common/ImageThumbnail';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import FileInput from '../Common/FileInput';
import MapContainer from '../Common/MapContainer';


const AddNewCampground = () => {
    const { campground, setCampground, setImage, handleChange, handleSubmit, handleFileChange, getClickCoords } = useContext(CampgroundsContext);

    const useStyles = makeStyles({
        fileInput: {
            display: 'none',
            visibility: 'none',
        },

        buttonMb: {
            marginBottom: '2rem',
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.container} component="div" disableGutters={true} maxWidth="full"> 
            <PrimarySearchAppBar />

            <Box display="flex" flexDirection="column" width={{sm: '90%', md:'30%'}} mx="auto" my={6} p={3}>
                <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
                    Create a New Campground
                </Typography>
                <FileInput handleChange={handleFileChange} inputLabel={'Upload Photo'} setState={setImage}/>
                {campground.image.length > 0 && 
                    <ImageThumbnail images={campground.image} collection={'images'} state={campground} setState={setCampground}/>
                }
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <TextField name="name" label="Name" value={campground.name} variant="outlined" margin="dense" color="borders" fullWidth/>
                    <TextField name="price" label="Price" variant="outlined" type="number" margin="dense" color="borders" fullWidth/>
                    <TextField name="description" label="Description" variant="outlined" margin="dense" multiline minRows="2" color="borders" fullWidth/>
                    <Box>
                        <Typography>Provide location</Typography>
                        <MapContainer width="100%" height="200px" onClick={getClickCoords} coords={campground.coords} />
                    </Box>
                    <Button type="submit" variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
     );
}
 
export default AddNewCampground;