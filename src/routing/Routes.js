import React from 'react';
import { Route } from 'react-router-dom';
import SwitchRoutes from './SwitchRoutes';
import LandingPage from '../components/landingPage/LandingPage';
import Campgrounds from '../components/campgrounds/Campgrounds';
import ShowCampground from '../components/showCampground/ShowCampground';
import AddNewCampground from '../components/forms/NewCampground';
import AddNewComment from '../components/forms/NewComment';
import EditCampground from '../components/forms/EditCampground';
import Login from '../components/forms/Login';

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
        key: "newcomment",
        path: "/campgrounds/:id/newcomment",
        exact: true,
        component: AddNewComment
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

    // {
    //     key: "landing",
    //     path: "/",
    //     exact: true,
    //     component: LandingPage 
    // },
    // {
    //     key: "campgrounds",
    //     path: "/campgrounds",
    //     component: SwitchRoutes,
    //     routes: [
    //         {
    //             key: "campgrounds_root",
    //             path: "/campgrounds",
    //             exact: true,
    //             component: Campgrounds 
    //         },
            
    //         {
    //             key: "campgroundid",
    //             path: "/campgrounds/:id",
    //             exact: true,
    //             component: ShowCampground
    //         },
    //         {
    //             key: "newcomment",
    //             path: "/campgrounds/:id/newcomment",
    //             exact: true,
    //             component: AddNewComment
    //         }        

    //     ]
        
    // },    
    
    // {
    //     key: "newcampground",
    //     path: "/newcampground",
    //     exact: true,
    //     component: AddNewCampground
    // }
    
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