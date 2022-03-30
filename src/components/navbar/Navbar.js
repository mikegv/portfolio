import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class='navbar'>
            <div>Mikes Portfolio</div>
            <ul>
                <li><Link to="/" >Mike</Link></li>
                <li><Link to='/aboutme'>Villa</Link></li>
                <li><Link to='/projects'>Jr</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;