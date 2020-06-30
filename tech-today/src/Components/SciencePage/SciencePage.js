import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';
import Carousel from '../Carousel/ScienceCarousel'
import Footer from '../Footer/Footer';

const SciencePage = () => {
    return (
        <div>
            <Navbar page="sciencePage"/>
            <ContentHero />
            <Carousel />
            <Footer />

        </div>
    )
};

export default SciencePage;