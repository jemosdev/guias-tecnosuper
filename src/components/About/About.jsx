import React from "react";
import "./About.css";

import { Container } from "react-bootstrap";
import about_image from "../../assets/about-image.svg";

function AboutUs() {
    return (
        <div className="about-container pb-4">
        <Container >
            <h1 className="about-title text-light pt-5 pb-4">Sobre <b>Nosotros</b></h1>
            <div className="about-text rounded-4 d-flex justify-content-between" >
                <div className="text-light p-4">
                    <p>Somos TecnoSuper una marca de distribución de tecnología para todo Colombia. Hacemos que la tecnología sea accesible para todos. No importa si estás reportado en sistemas de crédito, creemos que todos merecen la oportunidad de disfrutar de las últimas tendencias tecnológicas. Es por eso que ofrecemos opciones de crédito flexibles y con una excelente cuota inicial donde damos prioridad a tus necesidades y posibilidades, permitiéndote comenzar tu viaje tecnológico con facilidad.</p>
                </div>
                <div className="about-image">
                    <img src={about_image} alt="about-image" />
                </div>
            </div>
        </Container>
        </div>
    );
}

export { AboutUs };