import React from "react";
import './SearchBar.css';

function SearchBar({searchValue, setSearchValue}) {
    
    return (
        <div className='searchbar-wrapper p-4 d-flex justify-content-center'>
            <div className="search-container">
                <input 
                type='search' 
                className="searchbar rounded-4"
                placeholder='Buscar guías'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                ></input>
            </div>
        </div>
    );
}

export { SearchBar };