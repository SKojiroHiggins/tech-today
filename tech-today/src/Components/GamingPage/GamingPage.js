import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContentHero from '../ContentHero/contentHero';


const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <Footer />

            <ContentHero />
        </div>
    )
};

export default GamingPage;