import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topbar } from "../components/Topbar/Topbar.jsx";
import { NavigationButton } from "../components/NavigationButton/NavigationButton.jsx";

function NotFoundPage() {
    return (
        <div>
            <Topbar />
            <h1>404 Not Found </h1>
            <div>
                <NavigationButton to={'/'}>Back Home</NavigationButton>
            </div>
        </div>
    );
}

export { NotFoundPage };