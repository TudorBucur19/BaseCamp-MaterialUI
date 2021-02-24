import React from 'react';
import './NewForm.scss';

const AddNewComment = () => {
    return ( 
        <div className="form-container">
            <h2>Add a New Comment</h2>
            <form className="new-item-form">
                <input type="text" name="comment" placeholder="add comment"/>
                <button type="submit" className="btn-submit">Submit!</button>
            </form>
        </div>
     );
}
 
export default AddNewComment;