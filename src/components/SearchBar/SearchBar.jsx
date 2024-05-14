import React from "react";
import './SearchBar.css';
import { useSearchParams } from "react-router-dom";

function SearchBar() {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className='searchbar-wrapper p-4 d-flex justify-content-center'>
            <div className="search-container">
                <input 
                type='search' 
                className="searchbar rounded-4"
                placeholder='Buscar guías'
                //omit the argument to call useSearchParams with '' when it doesn't use the searchbar to enter in one route
                value={searchParams.get("q") || ''}
                onChange={(event) => {
                    /* setSearchValue(event.target.value); it is the same */
                    setSearchParams({
                        'q': event.target.value
                    });
                }}
                ></input>
            </div>
        </div>
    );
}

export { SearchBar };