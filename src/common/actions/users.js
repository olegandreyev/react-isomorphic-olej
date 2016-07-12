/**
 * Created by Olejka on 12.07.2016.
 */
import {FETCH_USERS} from '../constants'
import api from '../utils/api'

export function fetchUsers(){
    return{
        type: FETCH_USERS,
        promise: api.getUsers()
    }
}