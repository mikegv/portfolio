import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
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
                <li><Link to='/aboutme'>{menuItems.AboutMe}</Link></li>
                <li><Link to='/projects'>{menuItems.Projects}</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;