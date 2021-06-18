import React, { Component, Fragment } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './login/Login';


 class PageContent extends Component {

    render() {
        return (
            <div>
                <Fragment>
                <Router>
                   <Switch>
                       <Route path='/' exact name='Login' component={Login}/>
                   </Switch>
                </Router>
                </Fragment>
            </div>
        )
    }
}

export default PageContent
