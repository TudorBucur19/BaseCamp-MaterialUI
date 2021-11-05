import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { CommentsContext } from '../../contexts/CommentsContext';
import Navbar from '../navbar/Navbar';
import './ShowCampground.scss';


const ShowCampground = () => {
    const { campgroundsList, removeItem } = useContext(CampgroundsContext);
    const { allComments, removeComment } = useContext(CommentsContext);
    const { id } = useParams(); 
    const camp = campgroundsList.find(campground => campground.id === id);
    const comments = allComments.filter(comment => comment.comment.commentID === id);

    const currentDate = new Date();
   
        
    // if(!camp){
    //     return <p>Loading...</p>
    // }
   
    return ( 
        <>        
        {camp && <div>
            <Navbar/>            
            <div className="wrapper">
                <div className="info">
                    <h3>BaseCamp</h3>
                    <div className="info__list">
                        <li className="active">Info 1</li>
                        <li>Info 2</li>
                        <li>Info 3</li>
                    </div>
                    
                </div>

                <div className="info-campground">
                    <div className="info-campground__main">
                        <img src={camp.campground.image} alt="main photo"/>
                        <div className="info-text">
                            <h4>
                                <span className="info-text__title">{camp.campground.name}</span> 
                                <span>$ {camp.campground.price} /night</span>
                            </h4>
                            <p>{camp.campground.description}</p>
                            <p><em>{`Submited by ${camp.campground.author}`}</em></p>                               
                        </div>
                        <div className="info-buttons">
                                <Link to={`/campgrounds/${id}/editcampground`}>
                                    <button 
                                    className="btn-edit-cg"
                                    >
                                        Edit Campground
                                    </button>
                                </Link>
                                    
                                    <button 
                                    className="btn-remove-cg"
                                    onClick={() => removeItem(id)}
                                    >
                                        Remove This Campground
                                    </button>
                        </div>
                    </div>     

                    <div className="campground-comments">
                        <Link to={`/campgrounds/${id}/newcomment`}>
                            <button className="btn-add-comm">Add New Comment</button>
                        </Link>
                        
                        {comments && comments.map(comment =>
                        <div key={comment.id}>                     
                            <p className="campground-comments__author">
                                <span><b>{comment.comment.commentAuthor}</b></span> 
                                <span>10 days ago</span>
                            </p>
                            <p>{comment.comment.commentText}</p> 
                            <button 
                            className="btn-remove-comm"
                            onClick={() => removeComment(comment.id)}
                            >
                                Remove
                            </button>                 
                        </div>
                        )}
                    </div>
                </div>
            </div>           
        </div>
        }
        </>
                    
     );
}
 
export default ShowCampground;