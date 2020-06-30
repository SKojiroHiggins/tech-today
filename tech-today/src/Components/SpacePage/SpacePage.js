import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';
import Carousel from '../Carousel/SpaceCarousel'
import Footer from '../Footer/Footer';


const SpacePage = () => {
    return (
        <div>
            <Navbar page="spacePage"/>
            <ContentHero />
            <Carousel />
            <Footer />

        </div>
    )
};

export default SpacePage;