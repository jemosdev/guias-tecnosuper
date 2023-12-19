import React from "react";
import "./Header.css";
import { Topbar } from "../Topbar/Topbar";
import { Hero } from "../Hero/Hero";

function Header () {
    return (
        <div>
            <Topbar/>
            <Hero/>
        </div>
    )
}

export { Header };