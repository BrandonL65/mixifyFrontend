import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
export default class Player extends Component {
  render() {
    return (
      <div>
        <SpotifyPlayer token = {this.props.accessToken} uris = "spotify:track:44Ljlpy44mHvLJxcYUvTK0"/>
      </div>
    )
  }
}
