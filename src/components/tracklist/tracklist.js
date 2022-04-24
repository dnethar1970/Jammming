import React from "react";
import './tracklist.css';
import { Track } from '../track/track';

export class Tracklist extends React.Component {
    render() {
        return (
            <div className="Tracklist">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id}  />
                    })
                }     
            </div>
        )
    }
}