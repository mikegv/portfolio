import React from 'react';
import Project from '../components/project/Project'  
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';


export const projectsData = graphql `
query MyQuery {
  allProjectsJson {
    nodes {
      github
      jpgName
      gifName
      address
      name
    }
  }
  allImageSharp {
    nodes {
      id
      fluid {
        src
        srcWebp
        originalName
      }
    }
  }
  allFile {
    nodes {
      name
      publicURL
    }
  }
}
`
const ProjectsPage = ({data}) => {

    const imageSharpArray = data.allImageSharp.nodes
    const files = data.allFile.nodes   
    const gifs = files.filter(item => item.publicURL.includes('gif'))
   
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
                {
                data.allProjectsJson.nodes.map((project, index) => {
                 const jpgInfo = imageSharpArray.find(item => item.fluid.originalName === project.jpgName)
                 const gifInfo = gifs.find(item => project.gifName.includes(item.name))
                 return <Project key={index} info={project}  images={jpgInfo} gif={gifInfo} />
                })
                }
            </div>
            </motion.div>
        </Layout>
    );
};

export default ProjectsPage;

