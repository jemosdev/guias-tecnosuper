import React from "react";
import "./Card.css";

function Card() {
    return (
        <div className="card-bis_skin_checked">
            <div className="card-body text-center rounded-4 pt-1 pb-2" >
                <h4 className="card-title text-light pb-4">¿Como puedo crear nuevos registros?</h4>
                <a href="#" className="btn btn-outline fw-bold" >Uso de la plataforma</a>
            </div>
        </div>
    )
}

export { Card };