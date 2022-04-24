import React from "react";
import './playlist.css';
import { Tracklist } from '../tracklist/tracklist';

export class PlayList extends React.Component {
    render() {
        return (
            <div className="PlayList">
                <input value={this.props.playListName }/>
                <Tracklist tracks={this.props.playListTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button class="PlayList-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}