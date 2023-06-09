import React from "react";

function Contact(props) {
    return (
        <div id="contact" className="Contact-container">

            <div className="Contact">

                <div className="contactRightPart">
                    <h3 className="titleForRightPart">Get in touch</h3>
                    <div className="discriptionTyper">
                        <input id="fullName" type="text" className="inputs" placeholder="Full Name*" autoComplete="none" />
                        <input id="email" type="text" className="inputs" placeholder="Email Adress*" autoComplete="none" />
                        <input id="phoneNumber" type="text" className="inputs" placeholder="Phone Number*" autoComplete="none" />
                        <textarea id="massege" type="text" className="inputs" placeholder="Your Massege..." />
                        <button className="massegeBtn">SEND MASSAGE</button>
                    </div>
                </div>

                <div className="contactLeftPart">
                    <h3 className="titleForLeftPart">How to find us</h3>
                    <iframe className="contact-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" style={{ border: "0" }} allowfullscreen="" />

                    <div className="mapAddress">
                        <h5>Head Office</h5>
                        <p className="contact-info"> <img src="imgs\location.svg" alt="" /> 10 Oxford Street, London, UK, E1 1EC</p>
                        <p className="contact-info"> <img src="imgs\openEnvelope.svg" alt="" /> office@smart.co.uk</p>
                        <p className="contact-info"> <img src="imgs\telephone.svg" alt="" /> +44 987 654 321</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;