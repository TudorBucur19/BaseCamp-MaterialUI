import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/styles';
import Container from '@mui/material/Container';

import PrimarySearchAppBar from 'components/navbar/AppBar';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import CampgroundForm from 'components/forms/CampgroundForm';


const AddNewCampground = ({ currentCamp, formTitle = "Create a New Campground" }) => {
    const { campground, setCampground, setIsEditMode } = useContext(CampgroundsContext);
    const { setValue } = useForm();

    useEffect(() => {
        setIsEditMode(false);
    }, []);
    
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
            <CampgroundForm actionName="Submit"/>
        </Container>
     );
}
 
export default AddNewCampground;