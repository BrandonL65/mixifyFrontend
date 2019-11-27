import React, { Component } from 'react'
export default class SongsList extends Component {

  render() {
    let playlistID = this.props.singlePlaylistRender.uri.split("spotify:playlist:")[1];
    let playlistSrc = `https://open.spotify.com/embed/playlist/${playlistID}`
    return (
      <div className = "playerDiv">
        <iframe className = "iframe" title = "playlist" src= {playlistSrc} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}
