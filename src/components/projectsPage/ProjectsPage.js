import React from 'react';
import './ProjectsPage.css'
import projectArray from '../../projects.js'
import Project from '../project/Project'  

const ProjectsPage = () => {
    return (
        <div className='projectsContainer'>
            
         
            {projectArray.map(project => <Project key={project.name} info={project} />)}
            

        </div>
    );
};

export default ProjectsPage;