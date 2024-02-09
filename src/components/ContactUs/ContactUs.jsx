import React from "react";
import "./ContactUs.css";
import { Contact } from "../contact/contact";
import { Footer } from "../Footer/Footer";


function ContactUs() {
    return (
        <div className="contact-us">
            <Contact/>
            <Footer/>
        </div>
    )
}

export { ContactUs };