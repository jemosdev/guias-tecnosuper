import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from "../components/Topbar/Topbar.jsx";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { Guides } from "../components/Guides/Guides.jsx";

function GuidePage() {
    return (
        <div>
            <Topbar/>
            <SearchBar/>
            <Guides />
        </div>
    );
}

export default GuidePage