import React, { Component } from 'react'
import IndivSong from "./IndivSong"
export default class SongsList extends Component {

  mapAllSongsFromASinglePlaylist = () => {
    let all = this.props.allSongs.map(song => {
      return <IndivSong key = {song.track.name} song = {song} />
    })
    return all;
  }

  render() {
    return (
      <div>
        {this.mapAllSongsFromASinglePlaylist()}
      </div>
    )
  }
}
