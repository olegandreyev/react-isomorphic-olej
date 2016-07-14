/**
 * Created by Olejka on 11.07.2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { fetchUsers } from '../actions'

class Users extends React.Component {
    static fetchData({ store, params }) {
        return store.dispatch(fetchUsers())
    }
    componentDidMount(){
        this.props.fetchUsers();
    }
    render() {
        const {users} = this.props;
        return (
            <div>
                <Link to="">Back</Link>
                <ul>
                    {users.map((user,i) => <li key={i}>{user}</li>)}
                </ul>
            </div>
        )
    }
}
Users = connect(({users}) =>{
    return {users:users.users}
},{ fetchUsers })(Users);
export { Users }