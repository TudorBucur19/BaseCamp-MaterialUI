import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import Campgrounds from '../components/campgrounds/Campgrounds';
import ShowCampground from '../components/showCampground/ShowCampground';
import AddNewCampground from '../components/forms/NewCampground';

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
        component: Campgrounds
    },
    {
        key: "campgroundid",
        path: "/campgrounds/campgroundid",
        exact: false,
        component: ShowCampground
    },
    {
        key: "newcampground",
        path: "/campgrounds/new",
        exact: true,
        component: AddNewCampground
    }
];

const RoutesWithSubRoutes = (route) => {
    return ( 
        <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
        />
     );
}
 
export default RoutesWithSubRoutes;