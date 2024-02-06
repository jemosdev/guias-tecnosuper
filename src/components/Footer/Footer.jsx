import React from "react";
import "./Footer.css";

import { Container, Col } from "react-bootstrap";
import logo_footer from "../../assets/logo-tecnosuper-footer.svg";
import wave_high from "../../assets/wavehigh.svg";
import wave_low from "../../assets/wavelow.svg";

function Footer() {
    return (
        <footer>
            <Col md={12}>
                <div className="wavy-container">
                    <img src={wave_high} alt="wave-high-image" className="wavy-container-high" />
                    <img src={wave_low} alt="wave-low-image" className="wavy-container-low" />
                    <img src={logo_footer} alt="logo-footer-image" className="wavy-container-logo" />
                </div>
            </Col>
        </footer>
    )
}

export { Footer };