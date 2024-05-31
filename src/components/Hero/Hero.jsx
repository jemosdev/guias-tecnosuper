import React from "react";
import "./Hero.css";

import { Container, Row, Col } from "react-bootstrap";
import hero_right from "../../assets/imageC-1.svg";
import { NavigationButton } from "../NavigationButton/NavigationButton";

function Hero() {
    return (
        <div className="Hero-container pb-4">
            <Container>
                <Row>
                    <Col md={6} className="column-hero-1">
                        <div className="hero_left pt-4 pb-2">
                            <h1>Bienvenido a nuestra web de <span>guias para la app de tecnosuper</span></h1>
                            <p>Este sitio web ha sido creado exclusivamente con el objetivo de apoyar los procesos de aprendizaje y adaptación en la empresa. Aquí encontrarás una serie de recursos detallados y tutoriales que te permitirán comprender mejor los procesos internos de nuestra compañía, los cuales se deben realizar a través de nuestro sistema de información.</p>
                        </div>
                        <div>
                            <NavigationButton to={"/guides"}>VER GUIAS</NavigationButton>
                        </div>
                    </Col>
                    <Col md={6} className="column-hero-2 pb-2">
                        <div className="hero_right">
                            <div className="imageContainer">
                                <img src={hero_right} alt="hero-image" className="hero_right-img text-align-center" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Hero };