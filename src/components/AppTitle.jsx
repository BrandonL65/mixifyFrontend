import React, { Component } from 'react'
import SpotifyLogo from "../img/spotifyLogo.png";
export default class AppTitle extends Component {
  render() {
    return (
      <div className = "appTitleDiv">
        <img className = "userPageLogo"src = {SpotifyLogo} ></img>
        <h1>Mixify</h1>
      </div>
    )
  }
}
