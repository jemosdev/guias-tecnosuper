import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from "../components/Topbar/Topbar.jsx";

function NotFoundPage() {
    return (
        <div>
            <Topbar />
            <h1>404 Not Found </h1>
            <button className="btn fw-bold border-0 p-2">
                Home
            </button>
        </div>
    );
}

export default NotFoundPage