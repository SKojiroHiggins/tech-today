import React from "react";
import "../HomeHero/HomeHero.css";
import {Link} from 'react-router-dom';


class HomeHero extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="heroSection">
                    <div className="heroImage">
                        <div className="heroInfo">
                            <h1>Tech Today</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button className="btn"><Link to="/contact" className="btn">Contact Us</Link></button>
                        </div>
                    </div>
                </section>
        </React.Fragment>
        )
    }
}

export default HomeHero;