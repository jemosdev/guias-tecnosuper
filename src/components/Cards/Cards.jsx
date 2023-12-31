import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";


function Cards() {
    return (
        <div className="Container p-5">
            <div className="row p-2">
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
            <div className="row p-2">
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