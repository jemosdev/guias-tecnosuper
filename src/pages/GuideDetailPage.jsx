import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Topbar } from "../components/Topbar/Topbar";
import { NavigationButton } from "../components/NavigationButton/NavigationButton";
import { Media } from "../components/Media/Media";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";


function GuideDetailPage() {
    //useParams return all parameters available of the specific page 
    const { guideId } = useParams();
    const URL = `${import.meta.env.VITE_API_URL}/API/v1/tecnoGuides${guideId}`;
    console.log("Valor de guideId:", guideId);
    console.log("URL de la API:", URL);
    const { data, isLoading, error } = useFetch(URL);
    
    console.log("Valor de data:", data);
    console.log("Estado de isLoading:", isLoading);
    console.log("Error:", error);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    if (!data) {
        return <p>There is not data</p>
    }

    const { publicLink, description, details } = data;
    console.log("Valor de publicLink:", publicLink);
    return (
        <div className="app">
            <Topbar />
            <Container >
                <div className="guideDetail-container py-4 ">
                    <NavigationButton to={"/guides"}>VOLVER</NavigationButton>
                    <h2 className="d-flex justify-content-center py-4 text-light">{description}</h2>
                </div>
                <div >
                    <div className="d-flex justify-content-center">
                        {/* component to handle all the format that the returns */}
                        <Media src={publicLink} alt={description} />
                    </div>
                    <div className="d-flex flex-column py-4 text-light fs-4">
                        {/* convert text or string to html tag */}
                        <p dangerouslySetInnerHTML={{ __html: details }} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export { GuideDetailPage };
