import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';
import Carousel from '../Carousel/GamingCarousel'
import Footer from '../Footer/Footer';


const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <Carousel />
            <ContentHero />
            <Footer />
           
        </div>
    )
};

export default GamingPage;