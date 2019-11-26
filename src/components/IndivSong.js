import React, { Component } from 'react'

export default class IndivSong extends Component {
  displaySongDetails = () => {
    console.log(this.props.song.track.uri)
  }
  render() {
    let trackURL = "";
    if (this.props.song.track.album.images.length > 0) {
      trackURL = this.props.song.track.album.images[1].url
    }
    else {
      trackURL = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
    }
    return (
      <div className = "IndivSong" onClick = {this.displaySongDetails}>
        <img className = "IndivSongImg" src = {trackURL} alt = ""></img>
        <h2 className = "IndivSongArtist">{this.props.song.track.artists[0].name}:</h2>
        <h2 className = "IndivSongName">{this.props.song.track.name}</h2>

      </div>
    )
  }
}
