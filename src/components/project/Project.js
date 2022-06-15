import React, { useState } from 'react';
import './Project.css'
import { faReact, faJsSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Project = (props) => {
    const [imageFileName, setImageFileName] = useState(props.info.jpgName)
    return (
        <div className='projectExample'>
            <img src={process.env.PUBLIC_URL + '/images/projects/' + imageFileName}   alt='project example' className='jpgImage' />
            <img src={process.env.PUBLIC_URL + '/images/projects/' + props.info.gifName}  alt='project example' className='gifImage' />
            <div onMouseEnter={()=>setImageFileName(props.info.gifName)} onMouseLeave={()=>setImageFileName(props.info.jpgName)} className='projectModal' >
            
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