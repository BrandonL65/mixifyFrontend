import React, { Component } from 'react'
import Playlists from "./Playlists.js"
import NameAndProfile from "./NameAndProfile.js"
import SearchSection from "./SearchSection"
export default class UserPage extends Component {
  state = {
    displayName: "",
    playlists: [],
    profilePic: ""
  }
  async componentDidMount() 
  {
    //Get user profile 
    let fetchedUser = await fetch(`http://localhost:5000/getUser/${this.props.accessToken}`);
    let parsedUser = await fetchedUser.json();
    await this.setStateAsync({
      displayName: parsedUser.display_name,
      profilePic: parsedUser.images[0].url
    })
    console.log(parsedUser);
    //get user's playlists
    let fetchedPlaylist = await fetch(`http://localhost:5000/playlists/${this.props.accessToken}`);
    let parsedPlaylist = await fetchedPlaylist.json();
    await this.setStateAsync({
      ...this.state,
      playlists: parsedPlaylist.items
    })
  }

  setStateAsync = (newState) => {
    return new Promise(resolve => {
      this.setState(newState,resolve);
    })
  }
  render() {
    if (this.state.playlists.length > 0) {
      return (
        <div className = "users">
          <NameAndProfile logout = {this.props.logout} profilePic = {this.state.profilePic} name = {this.state.displayName} />
          <SearchSection token = {this.props.accessToken} />
          <Playlists accessToken = {this.props.accessToken} allPlaylists = {this.state.playlists}/>
        </div>
      )
    }

    else {
      return (
        <React.Fragment>
          <h2> </h2>
        </React.Fragment>
      )
    }

  }
}
