import React from "react";
import "./Guides.css";
import { Bards } from "../Bards/Bards";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";


function Guides() {
    return (
        <div className="Guide-container">
            <div>
                <Bards/>
            </div>
            <div className="Guide-text text-light d-flex justify-content-center">
                <h1>Guias <span>Tecnosuper</span></h1>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div className="Guide-text text-light d-flex justify-content-center">
                <Cards/>
            </div>
        </div>
    )
}

export { Guides };