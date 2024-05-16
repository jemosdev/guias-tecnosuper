import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ card }) {
    const { ID, description, details } = card;

    function parseDescription(txt) {
        return new String(txt).replace(/ /gi, "-").toLowerCase()
    }

    return (
        <div className="card-bis_skin_checked">
            <div className="card-body text-center rounded-4 d-flex flex-column p-2 align-items-stretch">
                <div className="py-2 d-flex flex-column justify-content-center">
                    <h4 className="card-text text-light pb-1">{description}</h4>
                    <div className="card-title text-light" dangerouslySetInnerHTML={{ __html: details }} />
                </div>
                <Link to={`/guides/${parseDescription(description)}/id/${ID}`} className="btn mt-auto btn-outline fw-bold">Uso de la plataforma</Link>
            </div>
        </div>
    );
}

export { Card };