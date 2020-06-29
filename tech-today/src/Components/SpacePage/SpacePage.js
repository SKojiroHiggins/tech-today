import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHero/contentHero';
import Footer from '../Footer/Footer';


const SpacePage = () => {
    return (
        <div>
            <Navbar page="spacePage"/>
            <ContentHero />
            <Footer />

        </div>
    )
};

export default SpacePage;