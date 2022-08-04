
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialIcons'>
                <a href='https://github.com/mikegv' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                </a>
                <a href='https://www.linkedin.com/in/michael-villa-338a0567/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                </a>
                <Link to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </Link>
            </div>
            &copy; Mike Villa 2022
        </div>
    );
};

export default Footer;

