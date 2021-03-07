import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Campgrounds.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { FaCampground } from "react-icons/fa";




const Campgrounds = () => {
    const { campgroundsList } = useContext(CampgroundsContext);
    const { url } = useRouteMatch();
    

    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                <header className="header">
                    <h1 className="header__title"><FaCampground className="header__icon"/> Welcome to BaseCamp</h1>
                    <p className="header__subtitle">View all the hand-pick campgrounds around the world</p>
                    <Link to="/newcampground">
                        <button className="btn-add">Add new campground</button>
                    </Link>
                </header>

                <section className="campgrounds-grid">

                {campgroundsList &&
                        campgroundsList.map((campground)=> 
                            <div key={campground.id} className="campgrounds-grid__thumbnail">
                                <img src={campground.campground.image} alt="campground"/>
                                <h3>{campground.campground.name}</h3>
                                <p>{`${campground.campground.price} $ / night`}</p>
                                <Link to={`${url}/${campground.id}`}>
                                    <button>More info</button>
                                </Link>                                
                            </div>
                        )
                    }
                    
                </section>
            </div>
            
        </div>
     );
}
 
export default Campgrounds;