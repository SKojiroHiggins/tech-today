import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from "../HomeHero/HomeHero";
import HomeContent from '../HomeContent/HomeContent';
import Footer from '../Footer/Footer';
import HomeTopInfo from "../HomeInfoComponent/HomeInfo";


const MainPage = () => {
    return (
        <div>
            <Navbar page="mainPage"/>
            <HomeHero page="mainPage" />
            <HomeTopInfo />
            <HomeContent />
            <Footer />
        </div>
    )
};

export default MainPage;