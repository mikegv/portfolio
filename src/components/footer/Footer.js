
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialIcons'>
                <Link to='#'>
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                </Link>
                <Link to='#'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                </Link>
                <Link to='#'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </Link>
            </div>
            &copy; Mike Villa 2022
        </div>
    );
};

export default Footer;

