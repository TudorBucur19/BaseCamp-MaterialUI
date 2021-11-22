import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import './NewForm.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';
import PrimarySearchAppBar from '../navbar/AppBar';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import ImageThumbnail from '../Common/ImageThumbnail';


const AddNewCampground = () => {
    const { campground, handleChange, handleSubmit, handleFileChange } = useContext(CampgroundsContext);
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
                <Box display="flex" >
                    <Button
                    variant="contained"
                    component="label"
                    color="secondary"
                    sx={{mb: 1, width: {xs: '100%', sm: '50%'}}}
                    startIcon={<AddAPhotoOutlinedIcon/>}
                    >
                        Upload Photo
                        <input type="file" className={classes.fileInput} onChange={handleFileChange}/>
                    </Button>
                    <Typography ml={2}>Choose an image</Typography>
                </Box>
                {campground.image.length > 0 && 
                    <ImageThumbnail images={campground.image}/>
                }
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <TextField name="name" label="Name" value={campground.name} variant="outlined" margin="dense" color="borders" fullWidth/>
                    <TextField name="price" label="Price" variant="outlined" type="number" margin="dense" color="borders" fullWidth/>
                    <TextField name="description" label="Description" variant="outlined" margin="dense" multiline minRows="2" color="borders" fullWidth/>
                    
                    <Button type="submit" variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
     );
}
 
export default AddNewCampground;