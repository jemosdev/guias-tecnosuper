import React from "react";
import "./Topbar.css";
import logo from "../../assets/logo_tecnosuper.svg";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Topbar () {
    return (
        <div>
            <Navbar expand="lg" className="Navbar-body">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav color-secondary">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#home" className="text-light">Guias</Nav.Link>
                            <Nav.Link href="#home" className="text-light">Nosotros</Nav.Link>
                            <Nav.Link href="#home" className="text-light">Contactanos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export { Topbar };