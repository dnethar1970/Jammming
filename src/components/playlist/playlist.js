import React from "react";
import './playlist.css';
import { Tracklist } from '../tracklist/tracklist';

export class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="PlayList">
                <input value={ this.props.playListName } 
                    onChange={ this.handleNameChange }
                />
                <Tracklist tracks={this.props.playListTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button class="PlayList-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}