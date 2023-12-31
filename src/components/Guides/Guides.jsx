import React from "react";
import "./Guides.css";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";


function Guides() {
    return (
        <div className="Guide-container">
            <div className="Guide-text text-light d-flex justify-content-center pt-4">
                <h1>Guias <span>Tecnosuper</span></h1>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <Cards/>
            </div>
        </div>
    )
}

export { Guides };