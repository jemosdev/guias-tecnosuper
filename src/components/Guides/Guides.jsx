import React from "react";
import "./Guides.css";
import { Bards } from "../Bards/Bards";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";

//import { useFetch } from "../../useFetch";


function Guides() {
    //const { data } = useFetch("https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/tecnoGuides");

    return (
        <div className="Guide-container">
            <div>
                <Bards/>
            </div>
            <div className="Guide-text text-light d-flex justify-content-center">
                <h1>Guias <b>Tecnosuper</b></h1>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div className="Guide-cards text-light d-flex justify-content-center">
                <Cards/>
                {/*<div><ul>
                    {data?.map((tecnoGuides) => (<li key={tecnoGuides.code}>{tecnoGuides.description}</li>))}
    </ul></div>*/}
            </div>
        </div>
    );
}

export { Guides };