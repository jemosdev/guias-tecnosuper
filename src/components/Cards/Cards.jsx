import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";
import { useFetch } from "../../useFetch";


function Cards() {
    const { data } = useFetch("https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/tecnoGuides");

    return (
        <div className="Cards-Container pt-3">
            <div className="row">
                {data?.map((tecnoGuides) => (<div className="col-md-4" key={tecnoGuides.code}><Card title={tecnoGuides.ID} description={tecnoGuides.description}/></div>))}
            </div>
        </div>
    )
}

export { Cards };