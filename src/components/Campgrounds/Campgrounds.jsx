import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Campgrounds.scss';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';


const Campgrounds = () => {
    const { campgroundsList } = useContext(CampgroundsContext);
    const { path, url } = useRouteMatch();
    

    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                <header className="header">
                    <h1 className="header__title">Welcome to BaseCamp</h1>
                    <p className="header__subtitle">View all the hand-pick campgrounds around the world</p>
                    <Link to="/newcampground">
                        <a className="btn-add">Add new campground</a>
                    </Link>
                </header>

                <section className="campgrounds-grid">

                {campgroundsList &&
                        campgroundsList.map((campground, index)=> 
                            <div key={campground.id} className="campgrounds-grid__thumbnail">
                                <img src={campground.campground.image} alt="campground"/>
                                <h3>{campground.campground.name}</h3>
                                <p>{`${campground.campground.price} $ / night`}</p>
                                <Link to={`${url}/${campground.id}`}>
                                    <a>More info</a>
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