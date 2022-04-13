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
                <a href="https://mikegv.github.io/four-cards-react-version/" target='_blank'>
                    <img src={process.env.PUBLIC_URL + '/images/projects/fourcards.PNG'}
                        alt='four cards'
                    />
                </a>

            </div>


            <div className='project'>
                <a href="https://mikegv.github.io/Front-End-challenge---Sign-Up-Form/" target='_blank' >
                    <img src={process.env.PUBLIC_URL + '/images/projects/frontEndForm.gif'}
                        alt='Sign Up Form'
                    />
                </a>
            </div>
         

        </div>
    );
};

export default ProjectsPage;