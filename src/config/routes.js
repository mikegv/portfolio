import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import AboutMe from '../components/aboutme/AboutMe';
import ProjectsPage from '../components/projectsPage/ProjectsPage';
import HomePage from '../components/homePage/HomePage';



export default (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/aboutme' component={AboutMe} />
        </Switch>
);