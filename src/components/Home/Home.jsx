import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Guides } from "../Guides/Guides";
import { ContactUs } from "../contact/contact";

function Home () {
    return (
        <>
            <Header/>
            <Guides/>
            <ContactUs/>
        </>
    )
}

export { Home };