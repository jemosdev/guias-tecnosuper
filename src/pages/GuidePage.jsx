import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from "../components/Topbar/Topbar.jsx";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { Guides } from "../components/Guides/Guides.jsx";

function GuidePage() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Usuarios buscan todos de ' + searchValue);
    return (
        <div>
            <Topbar/>
            <SearchBar 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            />
            <Guides 
            searchValue={searchValue}
            />
        </div>
    );
}

export default GuidePage;