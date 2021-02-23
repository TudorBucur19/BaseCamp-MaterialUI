import React, { useContext } from 'react';
import './NewCampground.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';

const AddNewCampground = () => {
    const{ newCampground, handleChange, handleSubmit } = useContext(CampgroundsContext);

    return (
        <div> 
            <Navbar/>
            <div className="form-container">
                <h2>Create a New Campground</h2>
                <form className="new-campground-form" onChange={handleChange} onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="name" 
                    value={newCampground.name}                
                    placeholder="name"
                    />

                    <input 
                    type="number" 
                    name="price" 
                    value={newCampground.price} 
                    placeholder="price"
                    />

                    <input 
                    type="text" 
                    name="image" 
                    value={newCampground.image} 
                    placeholder="image url"
                    /> 

                    <input 
                    type="text" 
                    name="description" 
                    value={newCampground.description} 
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