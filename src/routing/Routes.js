import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SwitchRoutes from './SwitchRoutes';
import LandingPage from '../components/landingPage/LandingPage';
import Campgrounds from '../components/campgrounds/Campgrounds';
import ShowCampground from '../components/showCampground/ShowCampground';
import AddNewCampground from '../components/forms/NewCampground';
import AddNewComment from '../components/forms/NewComment';

export const ROUTES = [
    {
        key: "landing",
        path: "/",
        exact: true,
        component: LandingPage 
    },
    {
        key: "campgrounds",
        path: "/campgrounds",
        exact: true,
        component: Campgrounds,
    },
    {
        key: "campgroundid",
        path: "/campgrounds/:id",
        exact: true,
        component: ShowCampground
    },
    
    {
        key: "newcampground",
        path: "/newcampground",
        exact: true,
        component: AddNewCampground
    },
    {
        key: "newcomment",
        path: "/campgrounds/:id/newcomment",
        exact: true,
        component: AddNewComment
    }        
];

const RoutesWithSubRoutes = (route) => {
    return ( 
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />} 
        />
     );
}
 
export default RoutesWithSubRoutes;