import React from "react";
import './track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTtrack = this.removeTtrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTtrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack} >+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTtrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information" >
                    <h3> {this.props.track.name} </h3>
                    <p> {this.props.track.artist} | {this.props.track.album} </p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}