import React from "react";
import "./Guides.css";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";


function Guides() {

    return (
        <div className="Guide-container">
            <div className="bgTopLeft">
                <div className="bgBottomRight">
                    <div className="container">
                        <div className="Guide-text text-light text-center pb-4">
                            <h1>Guias <b>Tecnosuper</b></h1>
                        </div>

                        <SearchBar/>

                        <div className="pb-4"/>

                        <Cards/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Guides };