import React from 'react';
import './AboutMe.css'
import { motion } from 'framer-motion'
import { Page, Document } from "react-pdf";


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
                you can find me spending time outdoors with my family and sometimes watching some 80's horror movies.
                Feel free to check out my resume or contact me using the links below.
            </p>
           
                Resume:
                <div className="resume-container">
                <embed 
                src={process.env.PUBLIC_URL + "/files/resume.pdf#view=FitH"} width="actual-width.px" height="actual-height.px"
                type='application/pdf'
                />

      </div>
           
        </motion.div>

    );
};

export default AboutMe;