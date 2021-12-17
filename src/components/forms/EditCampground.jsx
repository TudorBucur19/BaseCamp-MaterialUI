import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import AddNewCampground from './NewCampground';

const EditCampground = () => {
    const { campgroundsList, setIsEditMode, setCurrentID } = useContext(CampgroundsContext);
    const { id } = useParams();
    const camp = campgroundsList.find(campground => campground.id === id);
    console.log(camp)

    useEffect(() => {
        setCurrentID(id);
        setIsEditMode(true);
    }, []);
    
    return ( 
        <AddNewCampground currentCamp={camp} formTitle={`Edit ${camp.campground.name}`}/>
     );
}
 
export default EditCampground;