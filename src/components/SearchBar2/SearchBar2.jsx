import React from "react";
import './SearchBar2.css';

import { Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar2() {
    return (
        <div className="search2bar d-flex justify-content-center">
            <Col sm="5" >
                <Form.Control type="text" placeholder="Buscar guías" />
                <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </Col>
        </div>
    );
}

export { SearchBar2 };