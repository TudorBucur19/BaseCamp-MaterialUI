import React from 'react';
import Navbar from '../navbar/Navbar';
import './Campgrounds.scss'

const Campgrounds = () => {
    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                <header className="header">
                    <h1 className="header__title">Welcome to BaseCamp</h1>
                    <p className="header__subtitle">View all the hand-pick campgrounds around the world</p>
                    <button className="btn-add">Add new campground</button>
                </header>

                <section className="campgrounds-grid">
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    <div className="campgrounds-grid__thumbnail">
                        <img src="http://placehold.it/150x150" alt="campground"/>
                        <h3>Clouds Rest</h3>
                        <p>Camp here</p>
                        <button>More info</button>
                    </div>
                    
                    
                </section>
            </div>
            
        </div>
     );
}
 
export default Campgrounds;