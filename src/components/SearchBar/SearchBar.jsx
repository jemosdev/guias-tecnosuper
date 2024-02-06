import React from "react";
import './SearchBar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
        <div className='SearchBar-wrapper d-flex justify-content-center'>
            <div className="search-container">
                <input 
                type='search' 
                className="SearchBar rounded-4" 
                placeholder='Buscar guías'
                />
                <span className="search_icon border-0"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span>
                
            </div>
        </div>
    );
}

export { SearchBar };