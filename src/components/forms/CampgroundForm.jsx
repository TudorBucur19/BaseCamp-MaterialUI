import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ImageThumbnail from 'components/Common/ImageThumbnail';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import FileInput from 'components/Common/FileInput';
import MapContainer from 'components/Common/MapContainer';
import { campgroundFacilities, landscapeType, locationAccess, accomodationType } from 'utils/configValues';

const CampgroundForm = ({ currentCamp, actionName, formTitle = "Create a New Campground" }) => {
    const { campground, setCampground, setImages, submitCampground, handleFileChange, getClickCoords, currentPosition } = useContext(CampgroundsContext);
    const { register, handleSubmit, setValue } = useForm();
    
    useEffect(() => {
        if(currentCamp) {
        const { name, price, description, image, coords, country, facilities, access, accomodationOptions } = currentCamp.campground;
        setValue('name', name);
        setValue('price', price);
        setValue('description', description);
        setCampground({
            ...campground,
            image: image,
            coords: coords,
            country: country,
            facilities: facilities,
            access: access,
            accomodationOptions: accomodationOptions
            })
        };
    }, []);

    
    const existingFacilities = currentCamp && currentCamp.campground.facilities;
    const existingAccess = currentCamp && currentCamp.campground.access;
    const existingAccOptions = currentCamp && currentCamp.campground.accomodationOptions;
    
    return ( 
        <Box display="flex" flexDirection="column" width={{sm: '90%', md:'40%'}} mx="auto" my={6} p={3}>
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
                <FormControl fullWidth color="borders" margin="dense">
                    <InputLabel id="demo-simple-select-label">Campground Landscape</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Campground Landscape"
                        {...register("landscape", { required: true })}                         
                    >
                        {landscapeType.map(item =>(
                            <MenuItem  value={item} key={item}>{item}</MenuItem>
                        ))}
                        
                    </Select>
                </FormControl>

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

                <Typography color="text.secondary" mt={2}>Access:</Typography>
                <Box mb={2}>
                {locationAccess.map(item => (
                    <FormControlLabel 
                    key={item.name}
                    control={
                        <Checkbox 
                        {...register('access')} 
                        value={item.name} 
                        color="secondary" 
                        defaultChecked={existingAccess && existingAccess.includes(item.name)}
                        />
                    } 
                    label={item.name}
                    />                                                            
                ))}    
                </Box>      

                <Typography color="text.secondary" mt={2}>Accomodation Options:</Typography>
                <Box mb={2}>
                {accomodationType.map(item => ( 
                    <FormControlLabel 
                    control={
                        <Checkbox 
                        {...register('accomodationOptions')} 
                        value={item.name} 
                        color="secondary" 
                        defaultChecked={existingAccOptions && existingAccOptions.includes(item.name)}
                        />
                    } 
                    label={item.name}
                    key={item.name}
                    />                                                            
                ))}    
                </Box>      

                <Typography color="text.secondary" mt={2}>Campground facilities:</Typography>
                <Box mb={2}>
                {campgroundFacilities.map(item => ( 
                    <FormControlLabel 
                    control={
                        <Checkbox 
                        {...register('facilities')} 
                        value={item.name} 
                        color="secondary" 
                        defaultChecked={existingFacilities && existingFacilities.includes(item.name)}
                        />
                    } 
                    label={item.name}
                    key={item.name}
                    />                                                            
                ))}    
                </Box>       

                <Typography color="text.secondary" mt={2}>Location Contact:</Typography>
                <Box>
                <TextField 
                {...register("contactInfo.phoneNumber")} 
                label="Phone" 
                type="tel"
                variant="outlined" 
                margin="dense" 
                color="borders" 
                fullWidth
                />     

                <TextField 
                {...register("contactInfo.email")} 
                label="Email" 
                type="email"
                variant="outlined" 
                margin="dense" 
                color="borders" 
                fullWidth
                />     
                </Box>
                <Box>
                    <Typography color="text.secondary" my={2}>Choose location on map:</Typography>
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