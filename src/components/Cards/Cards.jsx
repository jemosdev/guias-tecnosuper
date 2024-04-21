import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";
import { useFetch } from "../../useFetch";


function Cards() {
    const { data } = useFetch("https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/tecnoGuides");

    return (
        <div className="Cards-grid justify-content-center">
            {
                data?.map((tecnoGuides) => (
                    <Card
                        key={tecnoGuides.code}
                        title={tecnoGuides.ID}
                        description={tecnoGuides.description}
                    />
                ))
            }
        </div>
    )
}

export { Cards };