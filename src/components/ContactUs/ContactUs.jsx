import React from "react";
import "./ContactUs.css";
import { Contact } from "../Contact/Contact";
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