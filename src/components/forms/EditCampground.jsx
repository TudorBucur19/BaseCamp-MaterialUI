import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from '@material-ui/styles';
import Container from '@mui/material/Container';

import { CampgroundsContext } from 'contexts/CampgroundsContext';
import CampgroundForm from 'components/forms/CampgroundForm';
import PrimarySearchAppBar from 'components/navbar/AppBar';

const EditCampground = () => {
    const { campgroundsList, setIsEditMode, setCurrentID } = useContext(CampgroundsContext);
    const { id } = useParams();
    const camp = campgroundsList.find(campground => campground.id === id);

    useEffect(() => {
        setCurrentID(id);
        setIsEditMode(true);
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
            <PrimarySearchAppBar/>
            <CampgroundForm currentCamp={camp} actionName="Update" formTitle={`Edit ${camp.campground.name}`}/>
        </Container>
     );
}
 
export default EditCampground;