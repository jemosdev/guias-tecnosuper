import React from "react";
import "./Guides.css";
import { Cards } from "../Cards/Cards";

function Guides({ searchValue }) {

    return (
        <div className="guide-container p-4">
            <div className="bgTopLeft">
                <div className="bgBottomRight">
                    <div className="container">
                        <div className="guide-text text-light text-center pb-4">
                            <h1>Guias <b>Tecnosuper</b></h1>
                        </div>

                        <div className="pb-4"/>

                        <Cards searchValue={ searchValue } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Guides };