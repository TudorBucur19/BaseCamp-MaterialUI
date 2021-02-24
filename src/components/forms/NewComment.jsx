import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';
import './NewForm.scss';

const AddNewComment = () => {
    const { campground, addComment, handleChange } = useContext(CampgroundsContext);
    const { id } = useParams();
    
    return ( 
        <div>
            <Navbar/>
            <div className="form-container">
                <h2>Add a New Comment</h2>
                <form className="new-item-form" onSubmit={() => addComment(id)}>
                    <input type="text" name="comment" value={campground.comment} onChange={handleChange} placeholder="add comment"/>
                    <button type="submit" className="btn-submit">Submit!</button>
                </form>
            </div>
        </div>
        
     );
}
 
export default AddNewComment;