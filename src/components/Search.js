import React, {useState} from "react"

function Search({updateSearch}) {

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={updateSearch} />
        </div>
    );
}

export default Search;