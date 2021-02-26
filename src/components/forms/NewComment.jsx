import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';
import './NewForm.scss';

const AddNewComment = () => {
    const { comment, handleChangeComment, handleSubmitComment } = useContext(CampgroundsContext);
    const { id } = useParams();
    console.log(id)
    
    
    return ( 
        <div>
            <Navbar/>
            <div className="form-container">
                <h2>Add a New Comment</h2>
                <form className="new-item-form" onSubmit={handleSubmitComment}>
                    <input
                    id={id} 
                    type="text" 
                    name="commentText" 
                    value={comment.commentText} 
                    onChange={handleChangeComment} 
                    placeholder="add comment"
                    />

                    <button type="submit" className="btn-submit">Submit!</button>
                </form>
            </div>
        </div>
        
     );
}
 
export default AddNewComment;