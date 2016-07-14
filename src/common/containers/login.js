/**
 * Created by Olejka on 14.07.2016.
 */

import React from 'react';
import {connect} from 'react-redux'

class Login extends React.Component {
    render(){
        return (
            <div>
                Login
            </div>
        )
    }
}
Login = connect()(Login);

export { Login }