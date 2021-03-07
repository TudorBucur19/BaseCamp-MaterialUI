import React, { useContext, useState } from 'react';
import './NewForm.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router';

const EditCampground = () => {
    const { campground, campgroundsList, handleChange, handleSubmit } = useContext(CampgroundsContext);
    const { id } = useParams();
    const camp = campgroundsList.find(campground => campground.id === id);
    const [editableCamp, setEditableCamp] = useState(camp.campground);
    
    return ( 
        <div>
            <Navbar/>
            <div className="form-container">
                <h2>Edit Campground</h2>
                <form className="new-item-form" onChange={handleChange} onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="name" 
                    value={editableCamp.name}                
                    placeholder="name"
                    />

                    <input 
                    type="number" 
                    name="price" 
                    value={editableCamp.price} 
                    placeholder="price"
                    />

                    <input 
                    type="text" 
                    name="image" 
                    value={editableCamp.image} 
                    placeholder="image url"
                    /> 

                    <textarea 
                    name="description" 
                    value={editableCamp.description} 
                    placeholder="description"
                    />

                    <button 
                    type="submit" 
                    className="btn-submit"
                    >
                    Submit!
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default EditCampground;