import React from 'react';
import './ProjectsPage.css'
import projectArray from '../../projects.js'
import Project from '../project/Project'  
import { motion } from 'framer-motion'
const ProjectsPage = () => {
    return (
        <
        motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: .5}}
        >
        <div className='projectsContainer'>
            {projectArray.map(project => <Project key={project.name} info={project} />)}
        </div>
        </motion.div>
    );
};

export default ProjectsPage;