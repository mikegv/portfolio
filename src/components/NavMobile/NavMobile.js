import '../navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

const NavMobile = () => {
    const [open, setOpen] = useState(false)
    const links = 
        <ul>
            <li onClick={()=>setOpen(!open)}><Link to="/" >Home</Link></li>
            <li onClick={()=>setOpen(!open)}><Link to='/aboutme'>About Me</Link></li>
            <li onClick={()=>setOpen(!open)}><Link to='/projects'>Projects</Link></li>
        </ul>
    return (
        <div className='navMobile'>
            <span onClick={()=>setOpen(!open)}><CgMenu /></span>
            {open && links}
        </div>
    );
};

export default NavMobile;