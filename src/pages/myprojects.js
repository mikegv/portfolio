import React from 'react';

import Project from '../components/project/Project'  
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';


export const query = graphql `
query MyQuery {
  allFile {
    nodes {
      id
      publicURL
      name
    }
  }
}
  `

const ProjectsPage = ({data}) => {
    console.log('query: ',data.allFile.nodes)
    const projectsInfo = data.allFile.nodes
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
                
            
                {projectsInfo.map(project => <Project key={project.name} info={project} />)}
                {/* <img src={`../gifs/${data.allFile.nodes[1].name}.gif`} /> */}

            </div>
            </motion.div>
        </Layout>
    );
};

export default ProjectsPage;

