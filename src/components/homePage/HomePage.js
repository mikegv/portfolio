import React from 'react';
import './HomePage.css'
import { motion } from 'framer-motion'

const HomePage = () => {
    
    return (
        <
            motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: .5 }}
        >
            <div className='homepageContainer'>
                <motion.div initial={{ x: '0vw' }} animate={{ x: '-100vw' }} transition={{ duration: 1, delay: 2 }} className='graybox' >

                    <img src={process.env.PUBLIC_URL + '/images/projects/me2.jpg'} alt='project example' className='jpgImage' />

                </motion.div>
                <div className='homepage'>
                    <motion.div initial={{ x: '100vw' }} animate={{ x: '0vw' }} transition={{ duration: 1, delay: 1.9 }} >
                        <p className='titleSentence'>My name is <br /><span className='myname'>Mike Villa</span></p>
                        <p>I am a front end developer </p>
                        <p>I make dynamic websites </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomePage;