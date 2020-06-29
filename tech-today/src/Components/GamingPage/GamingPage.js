import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';
import Footer from '../Footer/Footer';


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