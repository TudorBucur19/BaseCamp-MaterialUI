import React, { useContext } from 'react';
import './NewForm.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';

const AddNewCampground = () => {
    const { campground, handleChange, handleSubmit, handleFileChange, handleUpload } = useContext(CampgroundsContext);

    return (
        <div> 
            <Navbar/>
            <div className="form-container">
                <h2>Create a New Campground</h2>

                <div className="upload-image-form">
                        <input 
                        type="file"           
                        onChange={handleFileChange}
                        /> 
                        <button onClick={handleUpload}>
                            Upload Photo
                        </button>
                </div>

                <form className="new-item-form" onChange={handleChange} onSubmit={handleSubmit}>
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