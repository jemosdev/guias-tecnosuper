import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from "../components/Topbar/Topbar";
import { Container } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { NavigationButton } from "../components/NavigationButton/NavigationButton";
import { useFetch } from "../useFetch";

function GuideDetailPage() {
    //useParams return all parameters available of the specific page 
    const { guideId } = useParams();

    const URL = `${import.meta.env.VITE_API_URL}/zoho/v1/console/tecnoGuides/${guideId}`;
    
    const { data, isLoading, error } = useFetch(URL);

    if (isLoading) {
        return <p>Ta cargando, tenga paciencia</p>
    }

    if (error) {
        return <p>Cógela suave, intenta de nuevo luego</p>
    }

    if (!data) {
        return <p>Papi, esta guia no existe, busca oficio</p>
    }

    const { publicLink, description, details } = data;

    return (
        <div>
            <Topbar />
            <Container >
                <div className="guideDetail-container py-4 ">
                    <NavigationButton to={"/guides"}>VOLVER</NavigationButton>
                    <h2 className=" d-flex justify-content-center pt-2">{description}</h2>
                </div>
                <div >
                    <div className="d-flex justify-content-center pt-2">
                        {/* crear un componente para manejar todos los formatos que el back devuelva e.g.: <Media src={publicLink} alt={description}/> */}
                        {publicLink.endsWith(".jpg") && <img src={publicLink} alt={description} lazy style={{ width: '480px', height: '480px' }}/>}
                        {publicLink.endsWith(".png") && <img src={publicLink} alt={description} lazy style={{ width: '480px', height: '480px' }}/>}
                        {publicLink.endsWith(".mp4") && <video> <source src={publicLink} type="video/mp4" style={{ width: '480px', height: '480px' }}/> </video>}
                        {/* Texto a etiqueta html */}
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: details }} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export { GuideDetailPage };
