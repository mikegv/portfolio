import React from 'react';
import './Navbar.css'
import { Link } from 'gatsby'
import { useState } from 'react';

const Navbar = () => {
    const mouseOut = {Home:'Mike', AboutMe:'Villa', Projects:'Jr'}
    const mouseOver = {Home:'Home', AboutMe:'About Me', Projects:'Projects'}
    const [menuItems, setMenuItems] = useState(mouseOut)

    return (
        <div className='navbar' onMouseOver={
                ()=>{setMenuItems(mouseOver)}
        } 
        onMouseOut={
            ()=>{setMenuItems(mouseOut)}
        } >
            <div>Mikes Portfolio</div>
            <ul>
                <li><Link to="/" >{menuItems.Home}</Link></li>
                <li><Link to='/about'>{menuItems.AboutMe}</Link></li>
                <li><Link to='/myprojects'>{menuItems.Projects}</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;