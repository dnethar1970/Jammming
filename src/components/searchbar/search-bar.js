import React from "react";
import './search-bar.css';

export class Searchbar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter a Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    };
}