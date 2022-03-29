import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from '../components/navbar/aboutme/AboutMe';

export default(
    <Switch>
        <Route exact path='/' component={AboutMe} />
    </Switch>
);