import React, { useContext } from 'react';
import './NewCampground.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';

const AddNewCampground = () => {
    const{ campground, handleChange, handleSubmit } = useContext(CampgroundsContext);

    return (
        <div> 
            <Navbar/>
            <div className="form-container">
                <h2>Create a New Campground</h2>
                <form className="new-campground-form" onChange={handleChange} onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="name" 
                    value={campground.name}                
                    placeholder="name"
                    />

                    <input 
                    type="number" 
                    name="price" 
                    value={campground.price} 
                    placeholder="price"
                    />

                    <input 
                    type="text" 
                    name="image" 
                    value={campground.image} 
                    placeholder="image url"
                    /> 

                    <input 
                    type="text" 
                    name="description" 
                    value={campground.description} 
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
 
export default AddNewCampground;