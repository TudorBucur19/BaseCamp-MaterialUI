import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from 'pages/landingPage/LandingPage';
import Campgrounds from 'pages/Campgrounds/Campgrounds';
import ShowCampground from 'pages/ShowCampground/ShowCampground';
import AddNewCampground from 'components/forms/NewCampground';
import EditCampground from 'components/forms/EditCampground';
import Login from 'components/forms/Login';

export const ROUTES = [
    {
        key: "landing",
        path: "/",
        exact: true,
        component: LandingPage 
    },
    
    {
        key: "campgrounds_root",
        path: "/campgrounds",
        exact: true,
        component: Campgrounds 
    },
    
    {
        key: "showcampground",
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
        key: "editcampground",
        path: "/campgrounds/:id/editcampground",
        exact: true,
        component: EditCampground
    },

    {
        key: "login",
        path: "/login",
        exact: false,
        component: Login
    }    
];

const RouteWithSubRoutes = (route) => {
    return ( 
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />} 
        />
     );
}
 
export default RouteWithSubRoutes;