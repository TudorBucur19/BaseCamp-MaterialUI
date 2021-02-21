import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesWithSubRoutes from './Routes';

const SwitchRoutes = ({ routes }) => {
    return ( 
        <Switch>
        {routes.map((route, i) => {
            return <RoutesWithSubRoutes key={route.key} {...route}/> 
        })
        }
            <Route component={() => <h2>Page not found</h2>} />
        </Switch>
     );
}
 
export default SwitchRoutes;