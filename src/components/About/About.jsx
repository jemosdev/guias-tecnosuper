import React from "react";
import "./About.css";

import { Container, Row, Col } from "react-bootstrap";
import about_image from "../../assets/about-image.svg";

function AboutUs() {
    return(
        <div className="About-container p-4">
            <Container>
                <Row>
                    <h1 className="About-title text-light pt-5 pb-4">Sobre <b>Nosotros</b></h1>
                </Row>
                <Row>
                    <Col className="about-text text-light rounded-4 pt-4 px-5" sm={8} md={7} lg={8}>
                        <p>Somos TecnoSuper una marca de distribución de tecnología para todo Colombia. Hacemos que la tecnología sea accesible para todos. No importa si estás reportado en sistemas de crédito, creemos que todos merecen la oportunidad de disfrutar de las últimas tendencias tecnológicas. Es por eso que ofrecemos opciones de crédito flexibles y con una excelente cuota inicial donde damos prioridad a tus necesidades y posibilidades, permitiéndote comenzar tu viaje tecnológico con facilidad.</p>
                    </Col>
                    <Col className="about-image" sm={4} md={5} lg={4}>
                        <div>
                            <div className="imageContainer">
                                <img src={about_image} alt="about-image" className="about-image-img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { AboutUs };