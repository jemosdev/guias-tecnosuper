import React from "react";
import './Bards.css';
import imageBards from "../../assets/bards.svg";

function Bards() {
    return(
        <div>
            <div className="imageLeftBard">
            <img src={imageBards} alt="bard-image" className="hero_right-img" />
            </div>
            <div className="imageRightBard">
            <img src={imageBards} alt="bard-image" className="hero_right-img" />
            </div>
        </div>
    )
}

export { Bards };