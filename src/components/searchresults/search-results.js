import React from "react";
import './search-results.css';
import { Tracklist } from '../tracklist/tracklist';


export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.searchResults} />
            </div>
        )
    }
}