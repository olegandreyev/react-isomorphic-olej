/**
 * Created by Olejka on 11.07.2016.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router'
import {App, Users, Login} from './containers'
export default function() {
    const routes = (
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="users" component={Users}/>
        </Route>
    );
    return routes;
}