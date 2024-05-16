import React from "react";
import "./Cards.css";
import { Card } from "../Card/Card";
import { useFetch } from "../../useFetch";

function Cards({ searchValue }) {
    const URL = `${import.meta.env.VITE_API_URL}/zoho/v1/console/tecnoGuides`;

    const { data, isLoading, error } = useFetch(URL);

    // Filter data based on searchValue
    const filteredData = data?.filter(tecnoGuides => {
        //verify if searchvalue is defined
        if (!searchValue) {
            return true;
        }
        return tecnoGuides.description && tecnoGuides.description.toLowerCase().includes(searchValue.toLowerCase())
    }
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
                    filteredData?.map((card) => (
                        <Card
                            key={card.code}
                            card={card}
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