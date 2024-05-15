import React from "react";
import "./NavigationButton.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavigationButton({to, children}) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        //to define the path which the button should navigate
        navigate(to);
    };

    return (
            <Button onClick={ handleNavigation } className="btn custom-button fw-bold border-0 p-3">
                {/* children allow to define the button content */}
                {children}
            </Button>
    );
}

export { NavigationButton };