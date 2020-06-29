import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from "../HomeHero/HomeHero";
import Footer from '../Footer/Footer';
import HomeContent from '../HomeContent/HomeContent';


const MainPage = () => {
    return (
        <div>
            <Navbar page="mainPage"/>
            <HomeHero page="mainPage" />
            <HomeContent />
            <Footer />
        </div>
    )
};

export default MainPage;