import React from 'react';
import './ProjectsPage.css'

const ProjectsPage = () => {
    return (
        <div className='projectsContainer'>
            <div className='project'>
                <a href="https://mikegv.github.io/Base-Apparel-Coming-Soon/" target='_blank' >
                <img src={process.env.PUBLIC_URL + '/images/projects/baseapparel.gif'}            
                alt='base product' 
                />
                </a>
            </div>
            <div className='project'>
                <a href="https://fourcardsreact.herokuapp.com/" target='_blank'>
                <img src={process.env.PUBLIC_URL + '/images/projects/fourcards.PNG'} 
                alt='four cards' 
                />
                </a>

</div>

          
            
        </div>
    );
};

export default ProjectsPage;