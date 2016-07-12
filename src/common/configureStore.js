/**
 * Created by Olejka on 11.07.2016.
 */

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import {browserHistory, Router, Route} from 'react-router';
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
import * as reducers from './reducers'

const rrMiddleware = routerMiddleware(browserHistory);
export default function(state){
    const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        }),
        state,
        compose (
            applyMiddleware(thunkMiddleware,promiseMiddleware,rrMiddleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
        )
    );
    return store;
}
