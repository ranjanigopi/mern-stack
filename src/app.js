import React from 'react';
import {Login} from './views/login';
import './app.css';
import {Register} from './views/register';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


export const App = () =>
    <Router>
        <Route path={'/login'} component={Login}/>
        <Route path={'/register'} component={Register}/>
        <Redirect to={'/login'}/>
    </Router>;
