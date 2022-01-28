import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import ImageThumbnail from 'components/Common/ImageThumbnail';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import FileInput from 'components/Common/FileInput';
import MapContainer from 'components/Common/MapContainer';
import { campgroundFacilities } from 'utils/configValues';

const CampgroundForm = ({ currentCamp, actionName, formTitle = "Create a New Campground" }) => {
    const { campground, setCampground, setImages, submitCampground, handleFileChange, getClickCoords, currentPosition } = useContext(CampgroundsContext);
    const { register, handleSubmit, setValue } = useForm();
    
    useEffect(() => {
        if(currentCamp) {
        const { name, price, description, image, coords, country, facilities } = currentCamp.campground;
        setValue('name', name);
        setValue('price', price);
        setValue('description', description);
        setCampground({
            ...campground,
            image: image,
            coords: coords,
            country: country,
            facilities: facilities,
            })
        };
    }, []);

    
    const existingFacilities = currentCamp && currentCamp.campground.facilities;

    return ( 
        <Box display="flex" flexDirection="column" width={{sm: '90%', md:'30%'}} mx="auto" my={6} p={3}>
            <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
                {formTitle}
            </Typography>
            <FileInput handleChange={handleFileChange} inputLabel={'Upload Photo'} setState={setImages}/>
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
                <Typography color="text.secondary" mt={2}>Campground facilities:</Typography>
                <Box mb={2}>
                {campgroundFacilities.map(item => ( 
                    <FormControlLabel 
                    control={<Checkbox {...register('facilities')} value={item.name} color="secondary" defaultChecked={existingFacilities && existingFacilities.includes(item.name)}/>} 
                    label={item.name}
                    />                                                            
                ))}    
                </Box>            

                <TextField 
                {...register("description", { required: true })} 
                label="Description" 
                variant="outlined" 
                margin="dense" 
                multiline 
                minRows="3" 
                color="borders" 
                fullWidth
                />

                <Box>
                    <Typography color="text.secondary" mt={2}>Choose location:</Typography>
                    <MapContainer 
                    width="100%" 
                    height="200px" 
                    {...{currentPosition}}
                    coords={campground.coords} 
                    handleClick={getClickCoords} 
                    />
                </Box>
                <Button type="submit" variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth>
                    {actionName}
                </Button>
            </form>
        </Box>
     );
}
 
export default CampgroundForm;