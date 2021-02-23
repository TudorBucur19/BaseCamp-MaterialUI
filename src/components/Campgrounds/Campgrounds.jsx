import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Campgrounds.scss'
import { CAMPGROUNDS } from '../showCampground/ShowCampground';

const Campgrounds = () => {
    console.log(CAMPGROUNDS);
    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                <header className="header">
                    <h1 className="header__title">Welcome to BaseCamp</h1>
                    <p className="header__subtitle">View all the hand-pick campgrounds around the world</p>
                    <Link to="campgrounds/new">
                        <a className="btn-add">Add new campground</a>
                    </Link>
                </header>

                <section className="campgrounds-grid">
                    {
                        CAMPGROUNDS.map(campground => 
                            <div key={campground.title} className="campgrounds-grid__thumbnail">
                                <img src={campground.img} alt="campground"/>
                                <h3>{campground.title}</h3>
                                <p>{campground.review}</p>
                                <Link to="/campgrounds/campgroundid">
                                    <a>More info</a>
                                </Link>
                                
                            </div>
                        )
                    }
                    
                    
                    
                    {/* <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div> */}
                    
                    
                </section>
            </div>
            
        </div>
     );
}
 
export default Campgrounds;