import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from "../HomeHero/HomeHero";
import Footer from '../Footer/Footer';
import HomeTopInfo from "../HomeInfoComponent/HomeInfo";


const MainPage = () => {
    return (
        <div>
            <Navbar page="mainPage"/>
            <HomeHero page="mainPage" />
            <HomeTopInfo />
            <Footer />
        </div>
    )
};

export default MainPage;