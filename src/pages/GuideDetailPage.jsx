import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { Topbar } from "../components/Topbar/Topbar";
import { NavigationButton } from "../components/NavigationButton/NavigationButton";
import { useFetch } from "../useFetch";
import { Media } from "../components/Media/Media";


function GuideDetailPage() {
    //useParams return all parameters available of the specific page 
    const { guideId } = useParams();

    const URL = `${import.meta.env.VITE_API_URL}/zoho/v1/console/tecnoGuides/${guideId}`;
    
    const { data, isLoading, error } = useFetch(URL);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    if (!data) {
        return <p>There is not data</p>
    }

    const { publicLink, description, details } = data;

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
                        {/* crear un componente para manejar todos los formatos que el back devuelva e.g.: <Media src={publicLink} alt={description}/> */}
                        {/* {publicLink.endsWith(".jpg") && <img src={publicLink} alt={description} loading="lazy" style={{ minWidth: '120px', minHeight: '120px' }}/>}
                        {publicLink.endsWith(".png") && <img src={publicLink} alt={description} loading="lazy" style={{ minWidth: '120px', minHeight: '120px' }}/>}
                        {publicLink.endsWith(".mp4") && <video> <source src={publicLink} type="video/mp4" style={{ minWidth: '120px', minHeight: '120px' }}/> </video>} */}
                        <Media src={publicLink} alt={description} />
                    </div>
                    <div className="d-flex flex-column py-4 text-light fs-4">
                        {/* Texto a etiqueta html */}
                        <p dangerouslySetInnerHTML={{ __html: details }} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export { GuideDetailPage };
