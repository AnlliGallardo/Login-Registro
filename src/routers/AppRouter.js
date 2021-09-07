import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Registro from '../container/Registro';
import Login from '../container/Login';

export default class AppRouter extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Registro}/>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </Router>
        )
    }
}