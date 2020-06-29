import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContentHero from '../ContentHero/contentHero';


const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <ContentHero />
            <Footer />
        </div>
    )
};

export default GamingPage;