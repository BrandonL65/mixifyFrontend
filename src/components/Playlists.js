import React, { Component } from 'react'
import SinglePlaylist from "./SinglePlaylist.js"

export default class Playlists extends Component {
  generateSinglePlaylists = () => {
    let allMappedPlaylists = this.props.allPlaylists.map(single => {
      return <SinglePlaylist accessToken = {this.props.accessToken} onePlaylist = {single}/>
    })
    return allMappedPlaylists;
  }
  render() {
    return (
      <div className = "playlistsDiv">
        <h2 className = "playlistsTitle">Playlists</h2>
        {this.generateSinglePlaylists()}
      </div>
    )
  }
}
