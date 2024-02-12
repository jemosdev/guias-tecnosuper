import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-tecnosuper.svg";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <Col md={12}>
                <div className="wavy-container">
                    <section className="footer-contact text-light p-2">
                        <Row className="footer-contact-col">
                            <Col><FontAwesomeIcon icon={faInstagram} /><span>@tecnosuper.co</span></Col>
                            <Col><img src={logo} alt="logo" /></Col>
                            <Col><FontAwesomeIcon icon={faFacebook} /><span>@tecnosuper.co</span></Col>
                        </Row>
                    </section>
                    <section className="wave">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="" fillOpacity="1" d="M0,32L40,74.7C80,117,160,203,240,234.7C320,267,400,245,480,202.7C560,160,640,96,720,106.7C800,117,880,203,960,208C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </section>
                </div>
            </Col>
        </footer>
    );
}

export { Footer };