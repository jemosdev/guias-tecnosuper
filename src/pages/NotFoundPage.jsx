import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topbar } from "../components/Topbar/Topbar.jsx";

function NotFoundPage() {
    return (
        <div>
            <Topbar />
            <h1>404 Not Found </h1>
            <div>
                <Link to="/" className="btn btn-primary fw-bold border-0 p-3">
                    Regresar a Home
                </Link>
            </div>
        </div>
    );
}

export { NotFoundPage };