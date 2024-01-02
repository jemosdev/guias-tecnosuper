import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";


function Cards() {
    return (
        <div className="Cards-Container">
            <div className="row">
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export { Cards };