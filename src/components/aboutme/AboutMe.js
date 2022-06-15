import React from 'react';
import './AboutMe.css'
import { motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <
        motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: .5}}
        >
            <p className='aboutMe'>
                Hi, my name is Mike. I am a web developer who specializes in front end development. My main
                tools are Javascript, CSS and React.  I am currently working as a React apprentice for Bitwise Industries under Alpha Works in
                Fresno California. I am passionate about all things technology but especially love programming. In my free time
                you can find me spending time outdoors with my family and sometimes watching the occasional 80's horror movie.
                Feel free to contact me or check out my github using the links below.
            </p>
        </motion.div>

    );
};

export default AboutMe;