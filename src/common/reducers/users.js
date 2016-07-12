/**
 * Created by Olejka on 12.07.2016.
 */

import {FETCH_USERS} from '../constants'

const initialState = {
    users:[]
};

export function users(state = initialState, action){
    switch (action.type){
        case FETCH_USERS:
            return {
                users:action.res
            };
        default: return state;
    }
}