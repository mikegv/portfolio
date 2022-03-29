import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from '../components/aboutme/AboutMe';

export default(
    <Switch>
        <Route exact path='/' component={AboutMe} />
    </Switch>
);