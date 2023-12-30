import React from "react";
import "./About.css";

import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
    return(
        <div className="About-container">
            <Container>
                <Row>
                    <h1 className="About-title d-flex justify-content-start text-light p-4">Sobre <span>Nosotros</span></h1>
                </Row>
                    <Col md={7}>
                        <div className="about-text text-light">
                            <p>Somos TecnoSuper una marca de distribución de tecnología para todo Colombia. Hacemos que la tecnología sea accesible para todos. No importa si estás reportado en sistemas de crédito, creemos que todos merecen la oportunidad de disfrutar de las últimas tendencias tecnológicas. Es por eso que ofrecemos opciones de crédito flexibles y con una excelente cuota inicial donde damos prioridad a tus necesidades y posibilidades, permitiéndote comenzar tu viaje tecnológico con facilidad.</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="About__profile">
                        </div>
                    </Col>
                <Row>

                </Row>
            </Container>
        </div>
        
    )
}

export { AboutUs };