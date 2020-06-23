import React from "react";
import "../HomeHero/HomeHero.css";


class HomeHero extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="heroSection">
                    <div className="heroImage">
                        <div id="home" className="heroInfo">
                            <h1>Tech Today</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button className="btn">Contact Us</button>
                        </div>
                    </div>
                </section>
        </React.Fragment>
        )
    }
}

export default HomeHero;