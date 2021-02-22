import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import Campgrounds from '../components/Campgrounds/Campgrounds';

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