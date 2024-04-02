import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-tecnosuper.svg";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <div className="wave1">
                <div className="wave2">
                    <Container className="p-5 d-flex text-white text-center align-items-center justify-content-center">
                        <div className="px-4">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="ml-2">@tecnosuper.co</span>
                        </div>

                        <div>
                            <img src={logo} alt="logo" height="80px" />
                        </div>


                        <div className="px-4">
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="ml-2">@tecnosuper.co</span>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    );
}

export { Footer };