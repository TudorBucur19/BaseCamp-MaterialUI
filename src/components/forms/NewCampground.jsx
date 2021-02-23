import React from 'react';
import './NewCampground.scss';

const AddNewCampground = () => {
    return ( 
        <div className="form-container">
            <h2>Add New Campground</h2>
            <form className="new-campground-form">
                <input type="text" name="name" placeholder="name"/>
                <input type="number" name="price" placeholder="price"/>
                <input type="text" name="image" placeholder="image url"/> 
                <input type="text" name="description" placeholder="description"/>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
     );
}
 
export default AddNewCampground;