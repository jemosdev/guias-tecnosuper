import React from "react";
import "./Contact.css";

import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
    return(
        <div className="Contact-container p-4">
            <Container>
                <Row>
                    <div>
                        <h1 className="contact-text d-flex justify-content-center p-4"> ¡Contáctanos!</h1>
                    </div>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center">
                        <form>
                            <div class="form-row d-flex pb-4">
                                <div class="form-group col-md-6">
                                <input type="text" class="form-control rounded-3" placeholder="Nombre"/>
                                </div>
                                <div class="form-group col-md-6">
                                <input type="text" class="form-control rounded-3" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div class="form-group col-md-12 pb-3">
                                <input type="text" class="form-control rounded-3 p-4" placeholder="¡Escribe aquí si tienes una duda!"/>
                            </div>
                            <div className="btn-container d-flex justify-content-center">
                                <button type="submit" class="btn fw-bold custom-button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </div>
        
    )
}

export { ContactUs };