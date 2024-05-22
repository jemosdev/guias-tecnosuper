import React from "react";
import "./Topbar.css";
import logo from "../../assets/logo-tecnosuper.svg";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Topbar() {
    const location = useLocation();
    // Helper function to check if a route is active
    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <Navbar expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} />
                    {/* <i className="bi bi-gear"></i> */}
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto fs-5">
                        <Link to="/" className={`nav-link text-light ${isActive("/") ? "is_active" : ""}`}>Home</Link>
                        <Link to="/guides" className={`nav-link text-light ${isActive("/guides") ? "is_active" : ""}`}>Guias</Link>
                        <Link to="/about" className="nav-link text-light">Nosotros</Link>
                        <Link to="/contactus" className="nav-link text-light">Contactanos</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Topbar };