import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div className='projectExample'>
            <img src={process.env.PUBLIC_URL + '/images/projects/frontEndForm.gif'} alt='project example' />
            <div className='projectModal'>
                <p>my project</p>
                <div className='builtWithText'><div>react</div><div>javascript</div></div>
            </div>
        </div>
    );
};

export default Project;