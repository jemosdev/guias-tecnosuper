import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";
import { useFetch } from "../../useFetch";


function Cards({ searchValue }) {
    const { data, isLoading, error } = useFetch("https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/tecnoGuides");

    // Filter data based on searchValue
    const filteredData = data?.filter(tecnoGuides => tecnoGuides.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Loading status handling API
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handling error of the API
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="Cards-grid justify-content-center">
            {
                //is not null or undefined - ternary operator
                filteredData && filteredData.length > 0 ? (
                    filteredData?.map((tecnoGuides) => (
                        <Card
                            key={tecnoGuides.code}
                            title={tecnoGuides.ID}
                            description={tecnoGuides.description}
                        />
                    ))
                ) : (
                    <div className="cardsNotFound text-light">No se encontraron guías que coincidan con la búsqueda!!</div>
                )
            }
        </div>
    );
}

export { Cards };