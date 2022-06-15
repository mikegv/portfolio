import { Switch, Route, useLocation } from 'react-router-dom';
import AboutMe from '../aboutme/AboutMe';
import ProjectsPage from '../projectsPage/ProjectsPage';
import HomePage from '../homePage/HomePage';
import { AnimatePresence } from 'framer-motion'


const Routes = ()=>{
    const location = useLocation()

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/aboutme' component={AboutMe} />
        </Switch>
        </AnimatePresence>
    )
};

export default Routes