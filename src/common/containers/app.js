/**
 * Created by Olejka on 11.07.2016.
 */

import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React-redux application!
                <Link to="users">users</Link>
                {this.props.children}
            </div>
        )
    }
}

export { App }