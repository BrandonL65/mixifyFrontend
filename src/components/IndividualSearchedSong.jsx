import React, { Component } from 'react'

export default class IndividualSearchedSong extends Component {
  state = {
    renderPlayer: false
  }
  handleRenderPlayer = () => {
    this.setState({
      renderPlayer: !this.state.renderPlayer
    })
  }
  render() {
    console.log(this.props);
    let songSource = `https://open.spotify.com/embed/track/${this.props.song.id}`
    return (
      <div className = "searchedSongDiv" onClick = {this.handleRenderPlayer} >
        <img className = "searchedSongImg" src = {this.props.song.album.images[0].url} alt = ""></img>
        <h1 className = "searchedSongText">{this.props.song.artists[0].name} - {this.props.song.name}</h1>
        {this.state.renderPlayer === true ? <iframe className = "searchedSongPlay" src= {songSource} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> : null}
      </div>
    )
  }
}
