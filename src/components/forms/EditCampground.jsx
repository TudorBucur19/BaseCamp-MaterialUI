import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import AddNewCampground from './NewCampground';

const EditCampground = () => {
    const { campground, campgroundsList, handleChange, handleSubmit } = useContext(CampgroundsContext);
    const { id } = useParams();
    //const camp = campgroundsList.find(campground => campground.id === id);
    
    return ( 
        <AddNewCampground/>
     );
}
 
export default EditCampground;