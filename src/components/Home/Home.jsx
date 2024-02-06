import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Guides } from "../Guides/Guides";
import { AboutUs } from "../About/About";
import { ContactUs } from "../contact/contact";
import { Footer } from "../Footer/Footer";


function Home () {
    return (
        <>
            <Header/>
            <Guides/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export { Home };