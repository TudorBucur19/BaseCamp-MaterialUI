import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ImageThumbnail from 'components/Common/ImageThumbnail';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import FileInput from 'components/Common/FileInput';
import MapContainer from 'components/Common/MapContainer';

const CampgroundForm = ({ currentCamp, actionName, formTitle = "Create a New Campground" }) => {
    const { campground, setCampground, setImage, submitCampground, handleFileChange, getClickCoords, isEditMode } = useContext(CampgroundsContext);
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if(currentCamp) {
        const { name, price, description, image, coords } = currentCamp.campground;
        setValue('name', name);
        setValue('price', price);
        setValue('description', description);
        setCampground({
            ...campground,
            image: image,
            coords: coords,
            })
        };
    }, []);

    return ( 
        <Box display="flex" flexDirection="column" width={{sm: '90%', md:'30%'}} mx="auto" my={6} p={3}>
                <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
                    {formTitle}
                </Typography>
                <FileInput handleChange={handleFileChange} inputLabel={'Upload Photo'} setState={setImage}/>
                {campground.image.length > 0 && 
                    <ImageThumbnail images={campground.image} collection={'images'} state={campground} setState={setCampground}/>
                }
                <form onSubmit={handleSubmit(submitCampground)}>
                    <TextField 
                    {...register("name", { required: true })} 
                    label="Name" 
                    variant="outlined" 
                    margin="dense" 
                    color="borders" 
                    fullWidth
                    />
                    <TextField 
                    {...register("price", { required: true })} 
                    type="number" 
                    label="Price" 
                    variant="outlined" 
                    margin="dense" 
                    color="borders" 
                    fullWidth
                    />
                    <TextField 
                    {...register("description", { required: true })} 
                    label="Description" 
                    variant="outlined" 
                    margin="dense" 
                    multiline 
                    minRows="2" 
                    color="borders" 
                    fullWidth
                    />
                    <Box>
                        <Typography color="text.secondary">Choose location</Typography>
                        <MapContainer width="100%" height="200px" onClick={getClickCoords} coords={campground.coords} />
                    </Box>
                    <Button type="submit" variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth>
                        {actionName}
                    </Button>
                </form>
            </Box>
     );
}
 
export default CampgroundForm;