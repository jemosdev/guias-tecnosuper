import React from "react";
import { useState } from "react";
import { Guides } from "../Guides/Guides";
import "./GuidesHome.css";

function GuidesHome() {
    //This wrapper component is used to filter and show a limited numbers of cards in Homepage
    const [searchValue] = useState("");

    //define the card number to show in homepage
    const limit_card = 6;

    return (
        <div>
            <Guides searchValue={searchValue} limitCard={limit_card} />
        </div>
    );
}

export { GuidesHome };