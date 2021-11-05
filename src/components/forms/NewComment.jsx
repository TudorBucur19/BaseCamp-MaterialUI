import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { CommentsContext } from '../../contexts/CommentsContext';
import Navbar from '../navbar/Navbar';
import './NewForm.scss';

const AddNewComment = () => {
    const { comment, handleChangeComment, handleSubmitComment } = useContext(CommentsContext);
    const { campgroundsList } = useContext(CampgroundsContext);
    const { id } = useParams();
    const thisCampground = campgroundsList.find(campground => campground.id === id);
    console.log(thisCampground)
       
    
    return ( 
        <div>
            <Navbar/>
            <div className="form-container">
                <h2>Add a New Comment to {thisCampground.campground.name}</h2>
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