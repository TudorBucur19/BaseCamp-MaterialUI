import React from 'react';
import Navbar from '../navbar/Navbar';
import './ShowCampground.scss';

export const CAMPGROUNDS = [
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Hacienda",
        review: "good"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Clouds rest",
        review: "medium"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Lake",
        review: "great"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Yosemite",
        review: "poor"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Hacienda",
        review: "good"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Clouds rest",
        review: "medium"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Lake",
        review: "great"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Yosemite",
        review: "poor"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Lake",
        review: "great"
    },
    {
        img: "http://i.imgur.com/K3mPv14.jpg",
        title: "Yosemite",
        review: "poor"
    }
]

const ShowCampground = () => {
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
                        <img src="http://i.imgur.com/K3mPv14.jpg" alt="main photo"/>
                        <div className="info-campground__main info-text">
                            <h4><span className="info-text__title">Clouds rest</span> <span>$9.00 / night</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore facilis qui optio ad! Quia unde voluptatum ipsum quisquam 
                                provident assumenda minus nam, perferendis adipisci quidem repudiandae, 
                                illo doloremque esse quam!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Facilis aut ipsa harum magnam repellendus voluptatibus repudiandae delectus 
                                modi nemo molestiae consequuntur tempora culpa eligendi quidem, deserunt voluptatum 
                                libero quam laboriosam.
                            </p>
                            <p><em>Submited by Tudor</em></p>                                
                        </div>
                    </div>     

                    <div className="campground-comments">
                        <a>Add New Comment</a>
                        <p className="campground-comments__author"><span><b>Author</b></span> <span>10 days ago</span></p>
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