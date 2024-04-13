import React from "react";
import "./Topbar.css";
import logo from "../../assets/logo-tecnosuper.svg";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Topbar() {
    return (
        <Navbar expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} />
                    <i className="bi bi-gear"></i>
                </Navbar.Toggle>
                <Navbar.Collapse className="">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#home" className="text-light">Guias</Nav.Link>
                        <Nav.Link href="#home" className="text-light">Nosotros</Nav.Link>
                        <Nav.Link href="#home" className="text-light">Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Topbar };