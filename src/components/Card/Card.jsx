import React from "react";
import "./Card.css";


function Card({title, description }) {

    return (
        <div className="card-bis_skin_checked">
            <div className="card-body text-center rounded-4 p-2 h-100">
                <h4 className="card-title text-light">{title}</h4>
                <p className="card-text text-light">{description}</p>
                <a href="#" className="btn btn-outline fw-bold" target="_blank" >Uso de la plataforma</a>
            </div>
        </div>
    )
}

export { Card };