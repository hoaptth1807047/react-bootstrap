import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../constants/routes'

import Navigation from '../Navigation';
import HomePage from "../Home";

const App = () => (
    <Router>
        <Navigation/>
        <Route path={ROUTES.HOME} component={HomePage} />
    </Router>
);


export default App;
