import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { GuidesHome } from "../GuidesHome/GuidesHome";
import { AboutUs } from "../About/About";
import { ContactUs } from "../ContactUs/ContactUs";


function Home () {
    
    return (
        <>
            <Header/>
            <GuidesHome />
            <AboutUs/>
            <ContactUs/>
        </>
    );
}

export { Home };