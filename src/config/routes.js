import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from '../components/aboutme/AboutMe';
import ProjectsPage from '../components/projectsPage/ProjectsPage';

export default(
    <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/projects' component={ProjectsPage} />
    </Switch>
);