import React, { Component } from 'react'
import SongsList from "./SongsList.js"
export default class SinglePlaylist extends Component {
  state = {
    name: "",
    image: "",
    showPlaylistSongs: false,
    allSongs: []
  }
  async componentDidMount() {
    let fetchedPlaylistSongs = await fetch(`https://mixify-backend.herokuapp.com/playlists/tracks/${this.props.accessToken}/${this.props.onePlaylist.id}`)
    let parsedPlaylistSongs = await fetchedPlaylistSongs.json();
    await this.setStateAsync({
      name: this.props.onePlaylist.name,
      image: this.props.onePlaylist.images[0].url,
      allSongs: parsedPlaylistSongs.items
    })
  }
  toggleShowSongs = async () => {
    this.setState({
      ...this.state,
      showPlaylistSongs: !this.state.showPlaylistSongs
    })
  }
  setStateAsync = (newState) => {
    return new Promise(resolve => {
      this.setState(newState,resolve);
    })
  }
  render() {
    return (
      <div className = "individualPlaylistSection">
        <h3>{this.state.name}</h3>
        <div className = "playlistImageAndPlayerDiv">
          <img onClick = {this.toggleShowSongs } className = "playlistImg" src = {this.state.image} alt = ""></img>
          {this.state.showPlaylistSongs === true ? <SongsList allSongs = {this.state.allSongs} singlePlaylistRender = {this.props.onePlaylist}/> : null}
        </div>
      </div>
    )
  }
}
