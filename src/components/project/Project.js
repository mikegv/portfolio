import React, { useState } from 'react';
import './Project.css'
import { faReact, faJsSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Project = (props) => {
    const [imageFileName, setImageFileName] = useState(props.images.fluid.src)
    return (
        <div className='projectExample'>
            {/* <img src={process.env.PUBLIC_URL + '/images/projects/' + imageFileName}   alt='project example' className='jpgImage' /> */}
            <img src={imageFileName}   alt='project example' className='jpgImage' />
            <div 
                onMouseEnter={()=>setImageFileName(props.gif.publicURL)} 
                onMouseLeave={()=>setImageFileName(props.images.fluid.src)} 
                className='projectModal' 
            >


                <p className='projectLink'><a href={props.info.address} target='_blank'>{props.info.name}</a></p>
                <div className='builtWithText'>
                    <FontAwesomeIcon icon={faReact} />
                    <FontAwesomeIcon icon={faJsSquare} />
                    <a href={props.info.github} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    );
};

export default Project;