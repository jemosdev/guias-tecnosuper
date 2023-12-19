import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Guides } from "../Guides/Guides";

function Home () {
    return (
        <>
            <Header/>
            <Guides/>
        </>
    )
}

export { Home };