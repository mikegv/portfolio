import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import '../styles/styles.css'

const Layout = (props) => {
    return (
        <div className='App'>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;