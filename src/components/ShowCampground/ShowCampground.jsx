import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import Navbar from '../navbar/Navbar';
import './ShowCampground.scss';


const ShowCampground = () => {
    const { campgroundsList } = useContext(CampgroundsContext);
    const { id } = useParams();    
    const camp = campgroundsList.find(campground => campground.id === id).campground;
    
   
    return ( 
        <div>
            <Navbar/>
            <div className="wrapper">
                <div className="info">
                    <h3>BaseCamp</h3>
                    <div className="info__list">
                        <li>Info 1</li>
                        <li>Info 2</li>
                        <li>Info 3</li>
                    </div>
                    
                </div>

                <div className="info-campground">
                    <div className="info-campground__main">
                        <img src={camp.image} alt="main photo"/>
                        <div className="info-text">
                            <h4>
                                <span className="info-text__title">{camp.name}</span> 
                                <span>$ {camp.price} /night</span>
                            </h4>
                            <p>{camp.description}</p>
                            <p><em>Submited by Tudor</em></p>                                
                        </div>
                    </div>     

                    <div className="campground-comments">
                        <a>Add New Comment</a>
                        <p className="campground-comments__author">
                            <span><b>Author</b></span> 
                            <span>10 days ago</span>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Ea ullam ab quo veniam expedita maxime at in autem fuga non !
                        </p>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default ShowCampground;