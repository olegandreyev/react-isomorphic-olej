/**
 * Created by Olejka on 11.07.2016.
 */
import React from 'react'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import {render as renderComponent} from 'react-dom'

import configureStore from './configureStore'
import getRoutes from './routes'
import * as reducers from './reducers'

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

if(process.env.BROWSER){
    require('../styles/styles.scss')
}

renderComponent(
    <Provider store={store}>
        <Router history={history} routes={getRoutes()}/>
    </Provider>
    , document.getElementById('app'));