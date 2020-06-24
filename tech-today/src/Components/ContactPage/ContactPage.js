import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../ContactPage/ContactPage.css";

const contactPage = () => {
    return (
        <div>
            <Navbar page="contactPage"/>
            <div class="contactTitle">
                <h4 className="contactTitleText">Want To Contact Us?</h4>
            </div>
            <div class="contactDecor-div"></div>
            <section className="contactForm">
                    <div className="formColor">
                        <div>
                            <h2>Our Personal Information</h2>
                            <h3>(555) 666-7777</h3>
                            <h3>tech.today@gmail.com</h3>
                            <h3>123 Main Street</h3>
                        </div>
                    </div>
                    <div className="container">
                        <form name="contact" method="POST">
                            <label for="fname">First Name</label>
                            <input type="text" className="fname" id="fname" name="firstname" placeholder="Your name.." required />

                            <label for="lname">Last Name</label>
                            <input type="text" className="lname" id="lname" name="lastname" placeholder="Your last name.." required />

                            <label for="email">Email</label>
                            <input type="text" className="email" id="email" name="email" placeholder="Your email.." required />

                            <label for="message">Message</label>
                            <textarea className="message" id="message" name="message" cols="30" rows="10" placeholder="Write something.."></textarea>

                            <div className="zoomBtn-div">
                                <input type="submit" value="Submit" name="submit" />
                            </div>
                        </form>
                    </div>
            </section>
        </div>
    )
};

export default contactPage;