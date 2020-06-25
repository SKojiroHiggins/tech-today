import React from 'react';
import { Link } from 'react-router-dom';


const navbar = (props) => {
    let mainPageClass, gamingPageClass, sciencePageClass, spacePageClass, contactPageClass;

    if (props.page == "mainPage") {
        mainPageClass = 'current';
    } else if (props.page == "gamingPage") {
        gamingPageClass = 'current';
    } else if (props.page == "sciencePage") {
        sciencePageClass = 'current';
    } else if (props.page == "spacePage") {
        spacePageClass = 'current';
    } else if (props.page == "contactPage") {
        contactPageClass = 'current';
    }

    return (
        <div>
            <nav id="navbar">
                <img className="logo-img" alt="tech today logo" src="https://banner2.cleanpng.com/20180518/qpg/kisspng-logo-information-technology-high-tech-5afedb5ba74b99.9275016315266517396853.jpg" />
                <h1 id="logo"><Link to="/home">Tech Today</Link></h1>
                <ul>
                    <li><Link className={mainPageClass} to="/home">Home</Link></li>
                    <li><Link className={gamingPageClass} to="/gaming">Gaming</Link></li>
                    <li><Link className={sciencePageClass} to="/science">Science</Link></li>
                    <li><Link className={spacePageClass} to="/space">Space</Link></li>
                    <li><Link className={contactPageClass} to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <nav classname="hamburger" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><Link className={mainPageClass} to="/">Home</Link></li>
                        <li><Link className={gamingPageClass} to="/gaming">Gaming</Link></li>
                        <li><Link className={sciencePageClass} to="/science">Science</Link></li>
                        <li><Link className={spacePageClass} to="/space">Space</Link></li>
                        <li><Link className={contactPageClass} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default navbar;