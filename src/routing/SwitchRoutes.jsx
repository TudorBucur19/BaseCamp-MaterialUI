import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from './Routes';

const SwitchRoutes = ({ routes }) => {
    return ( 
        <Switch>
            {routes.map((route) => {
                return <RouteWithSubRoutes 
                        key={route.key} 
                        {...route}                        
                        /> 
            })
            }
            <Route component={() => <h2>Page not found</h2>} />
        </Switch>
     );
}
 
export default SwitchRoutes;