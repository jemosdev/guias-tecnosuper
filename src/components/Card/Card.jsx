import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({code, description, details }) {

    console.log(code);
    return (
        <div className="card-bis_skin_checked">
            <div className="card-body text-center rounded-4 p-2 h-100">
                <h4 className="card-text text-light pb-1">{description}</h4>
                <p className="card-title text-light p-2ca">{details}</p>
                <Link to={`/guides/${code}`} className="btn btn-outline fw-bold mt-2">Uso de la plataforma</Link>
            </div>
        </div>
    );
}

export { Card };