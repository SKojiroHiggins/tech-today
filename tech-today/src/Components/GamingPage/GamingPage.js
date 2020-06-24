import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';


const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <ContentHero />
        </div>
    )
};

export default GamingPage;