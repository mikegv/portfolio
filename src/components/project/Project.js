import React from 'react';
import './Project.css'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Project = (props) => {
    const imageFileName = props.fileName
    return (
        <div className='projectExample'>
            <img src={process.env.PUBLIC_URL + '/images/projects/' + imageFileName} alt='project example' />
            <div className='projectModal'>
                <p>my project</p>
                <div className='builtWithText'><div>react</div><div>javascript</div></div>
            </div>
        </div>
    );
};

export default Project;