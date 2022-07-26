import React from 'react';
import projectArray from '../projects.js'
import Project from '../components/project/Project'  
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const ProjectsPage = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

export default ProjectsPage;