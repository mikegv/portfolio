import React from 'react';
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';

const HomePage = ({data}) => {

    return (
        <Layout>
        <
            motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: .5 }}
        >
            <div className='homepageContainer'>
                <motion.div initial={{ x: 250 }} animate={{ x: '-100vw' }} transition={{ duration: 1, delay: 1.8 }} className='graybox' >

                    {/* <img src={'../images/me2.jpg'} alt='project example' className='jpgImage' /> */}
                    {/* <StaticImage src="../images/me2.jpg" alt="Mike Villa pointing at right of screen" /> */}
                    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} className='jpgImage' alt='self photo' />
                </motion.div>
                <div className='homepage'>
                    <motion.div initial={{ x: '100vw' }} animate={{ x: -190 }} transition={{ duration: 1, delay: 1.3 }} >
                        <p className='titleSentence'>My name is <br /><span className='myname'>Mike Villa</span></p>
                        <p>I am a front end developer </p>
                        <p>I make dynamic websites </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </Layout>
    );
};

export default HomePage;

export const query = graphql`query imageQuery {
    file(relativePath: {eq: "me2.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  `