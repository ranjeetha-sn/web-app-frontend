import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Signup from '../signup/Signup'

 class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
<input type="email" placeholder="UserName">UserName</input>
<input type="password" placeholder="Password">Password</input>
<button>Login</button>
<NavLink to='/Signup'>Signup</NavLink>



                </div>
            </div>
        )
    }
}

export default Login;
