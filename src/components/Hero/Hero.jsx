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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem, architecto vitae culpa fugiat saepe voluptatibus ea dicta ipsum enim! Dolorum nulla incidunt sapiente ex harum. Maxime explicabo repudiandae sequi?</p>
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