import React from 'react';
import './App.css';
import { SearchResults } from '../searchresults/search-results';
import { PlayList } from '../playlist/playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchResults: 
      [
        { name: 'dave', artist: 'superfly', album: 'much love', id: 0 },
        { name: 'dave', artist: 'superfly', album: 'much love', id: 1 },
        { name: 'dave', artist: 'superfly', album: 'much love', id: 2 }
      ],
      
      playListName: 'My Playlist',

      playListTracks: 
      [
        { name: 'new', artist: 'superfly', album: 'much love', id: 4 },
        { name: 'too', artist: 'superfly', album: 'much love', id: 5 }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playListTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          {/* Add searchbar component */}
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            <PlayList playListName={this.state.playListName} 
              playListTracks={this.state.playListTracks} 
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}