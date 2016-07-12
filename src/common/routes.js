/**
 * Created by Olejka on 11.07.2016.
 */

import React from 'react';
import { Route } from 'react-router'
import {App, Users} from './containers'
export default function() {
    const routes = (
        <Route path="/" component={App}>
            <Route path="users" component={Users}/>
        </Route>
    );
    return routes;
}