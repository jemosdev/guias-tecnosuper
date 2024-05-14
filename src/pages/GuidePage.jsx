import React from "react";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from "../components/Topbar/Topbar.jsx";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { Guides } from "../components/Guides/Guides.jsx";

function GuidePage() {
    
    let [searchParams] = useSearchParams();
    let q = searchParams.get("q");

    return (
        <div>
            <Topbar />
            <SearchBar />
            <Guides
                searchValue={q}
            />
        </div>
    );
}

export { GuidePage };