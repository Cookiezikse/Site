import React from "react";
import handlechange from "./Results";

function Searchbar() {

    return (
        <div>
            <input onChange={handlechange} className="SearchBar" type="text" placeholder="Recherche"/>


        </div>
    );
}

export default Searchbar;