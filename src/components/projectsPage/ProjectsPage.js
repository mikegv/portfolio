import React from 'react';
import './ProjectsPage.css'

import Project from '../project/Project';  

const ProjectsPage = () => {
    return (
        <div className='projectsContainer'>
            
         

            <Project fileName={'frontEndForm.gif'} />

            <Project fileName={'fourcards.PNG'} />

            <Project fileName={'baseapparel.gif'} />



        </div>
    );
};

export default ProjectsPage;