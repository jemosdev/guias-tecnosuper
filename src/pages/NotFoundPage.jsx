import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import not_found_image from "../assets/404notfound.jpg";

import { Topbar } from "../components/Topbar/Topbar.jsx";
import { NavigationButton } from "../components/NavigationButton/NavigationButton.jsx";

function NotFoundPage() {
    return (
        <div className="app">
            <Topbar />
            <Container>
                <div className="guideDetail-container py-4 ">
                    <NavigationButton to={"/"}>Regresar a Home</NavigationButton>
                    <p className="d-flex justify-content-center pt-4 text-light fs-1 fw-bold">404 Not Found</p>
                </div>
                <div className="d-flex justify-content-center pb-4 text-light">
                    <img src={not_found_image} alt="404notFound" loading="lazy" style={{ maxWidth: '380px', maxHeight: '380px' }}/>
                </div>
            </Container>
        </div>
    );
}

export { NotFoundPage };