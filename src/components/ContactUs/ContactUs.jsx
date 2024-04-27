import React from "react";
import "./ContactUs.css";
import { Contact } from "../contact/contact";
import { Footer } from "../Footer/Footer";


function ContactUs() {
    return (
        <div id="#contactus" className="contact-us">
            <Contact/>
            <Footer/>
        </div>
    )
}

export { ContactUs };