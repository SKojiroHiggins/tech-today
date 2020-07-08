import React from 'react';
import Navbar from '../Navbar/Navbar';
<<<<<<< HEAD
import ContentHero from '../ContentHeros/GameHero/GameHero';
=======
import ContentHero from '../ContentHero/contentHero';
import Carousel from '../Carousel/GamingCarousel'
>>>>>>> 446285147fa491e97bc21b1d4e0e4256eed9bdc9
import Footer from '../Footer/Footer';
import GameContent from '../Content/Gamers/GameContent';
import Gaming from '../Content/Gamers/gaming';
import Carousel from '../Carousel/GamingCarousel';

const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <Carousel />
            <ContentHero />
            <Carousel />
            <GameContent />
            <Gaming />
            <Footer />
           
        </div>
    )
};

export default GamingPage;