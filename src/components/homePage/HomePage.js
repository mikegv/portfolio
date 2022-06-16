import React from 'react';
import './HomePage.css'
import { motion } from 'framer-motion'
import { publish } from 'gh-pages';

const HomePage = () => {
    
    return (
        <
        motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: .5}}
        >
        <div className='homepageContainer'>
            <div className='graybox'>
            
            </div>
            <div className='homepage'>
                <motion.div initial={{x: '100vw' }} animate={{x: 0  }} transition={{duration: 1 , delay: 1}} >
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
