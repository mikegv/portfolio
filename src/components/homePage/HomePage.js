import React from 'react';
import './HomePage.css'

const HomePage = () => {
    
    return (
        <div className='homepageContainer'>
            <div className='homepage'>
                <p class='titleSentence'>My name is <span className='myname'>Mike Villa</span></p>
                <p>I am a front end developer </p>
                <p>I make dynamic websites </p>
            </div>
        </div>
    );
};

export default HomePage;