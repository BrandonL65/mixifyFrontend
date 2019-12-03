import React, { Component } from 'react'
import Playlists from "./Playlists.js"
import NameAndProfile from "./NameAndProfile.js"
import SearchSection from "./SearchSection"
import AppTitle from "./AppTitle.jsx"
export default class UserPage extends Component {
  state = {
    displayName: "",
    playlists: [],
    profilePic: ""
  }
  async componentDidMount() 
  {
    //Get user profile 
    let fetchedUser = await fetch(`https://mixify-backend.herokuapp.com/getUser/${this.props.accessToken}`);
    let parsedUser = await fetchedUser.json();
    let profilePicHold = ""
    if (typeof(parsedUser.images[0]) != "undefined") {
      profilePicHold = parsedUser.images[0].url
    }
    else {
      profilePicHold = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
    }
    await this.setStateAsync({
      displayName: parsedUser.display_name,
      profilePic: profilePicHold
    })
    
    //get user's playlists
    let fetchedPlaylist = await fetch(`https://mixify-backend.herokuapp.com/playlists/${this.props.accessToken}`);
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
          <AppTitle />
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
