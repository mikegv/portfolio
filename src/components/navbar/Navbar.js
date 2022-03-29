import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class='navbar'>
            <div>Mikes Portfolio</div>
            <ul>
                <li><Link>Mike</Link></li>
                <li><Link>Villa</Link></li>
                <li><Link>Jr</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;