import React, { Component, Fragment } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './login/Login';
import Signup from './signup/Signup';
import Welcome from './hello/Welcome'


 class PageContent extends Component {

    render() {
        return (
            <div>
                <Fragment>
                <Router>
                   <Switch>
                       <Route path='/' exact name='Login' component={Login}/>
                       <Route path='/Signup'  name='Signup' component={Signup}/>

                       <Route path='/Welcome'  name='Welcome' component={Welcome}/>

                   </Switch>
                </Router>
                </Fragment>
            </div>
        )
    }
}

export default PageContent
