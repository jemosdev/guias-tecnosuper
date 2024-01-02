import React from "react";
import './SearchBar.css';

function SearchBar() {
    return (
        <div className='SearchBar-wrapper d-flex justify-content-center'>
            <div className="search-container">
                <input 
                type='search' 
                className="SearchBar rounded-4" 
                placeholder='Buscar guías'
                />
                <span className="search_icon border-0"></span>
            </div>
        </div>
    );
}

export { SearchBar };