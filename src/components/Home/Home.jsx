import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Guides } from "../Guides/Guides";
import { AboutUs } from "../About/About";
import { ContactUs } from "../contact/contact";

function Home () {
    return (
        <>
            <Header/>
            <Guides/>
            <AboutUs/>
            <ContactUs/>
        </>
    )
}

export { Home };