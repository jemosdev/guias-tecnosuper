import React from "react";
import "./Guides.css";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";


function Guides() {
    return (
        <>
            <div className="Guide-container text-light d-flex justify-content-center pt-5">
                <h1>Guias <span>Tecnosuper</span></h1>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <Cards/>
            </div>
        </>
    )
}

export { Guides };