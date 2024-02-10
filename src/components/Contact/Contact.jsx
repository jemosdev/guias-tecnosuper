import React from "react";
import "./Contact.css";

import { Container, Row} from "react-bootstrap";

function Contact() {
    return(
        <div className="Contact-container p-4">
            <Container>
                <Row>
                    <div>
                        <h1 className="contact-title d-flex justify-content-center p-4"> <b>¡Contáctanos!</b></h1>
                    </div>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center">
                        <form>
                            <div className="form-row d-flex justify-content-between pb-4">
                                <div className="form-group col-md-5">
                                <input type="text" className="form-control rounded-3 border-0 text-light" placeholder="Nombre"/>
                                </div>
                                <div className="form-group col-md-5">
                                <input type="text" className="form-control rounded-3 border-0 text-light" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 pb-4">
                                <input type="text" className="form-control rounded-3 border-0 text-light p-4" placeholder="¡Escribe aquí si tienes una duda!"/>
                            </div>
                            <div className="btn-container d-flex justify-content-center">
                                <button type="submit" className="btn fw-bold custom-button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </Row>                
            </Container>
        </div>
    )
}

export { Contact };