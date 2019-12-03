import React from 'react';
import queryString from "query-string";
import './App.css';
import UserPage from './components/UserPage.js';
import SpotifyLogo from "./img/spotifyLogo.png";

class App extends React.Component {
  constructor() 
  {
    super();
    this.state = {
      accessToken: this.getHashParams().access_token,
      refreshToken: this.getHashParams().refresh_token,
      tokenTime: Date.now()
    }
  }

  getHashParams() {
    let path = window.location.pathname;
    let removeSlash = path.split("/");
    let separatedKeys = queryString.parse(removeSlash[0]);
    return separatedKeys;
  }
  handleRefresh = async () => {
    let newToken = await fetch(`https://mixify-backend.herokuapp.com/refreshToken/${this.state.refreshToken}`)
    let parsedToken = await newToken.json();
    if (parsedToken.refresh_token) {
      this.setState({
        accessToken: parsedToken.access_token,
        refreshToken: parsedToken.refresh_token
      })
    }
    else {
      this.setState({
        ...this.state,
        accessToken: parsedToken.access_token
      })
    }
  }
  timeToken = () => {
    console.log(Date.now() - this.state.tokenTime);
  }
  setStateAsync = (newState) => {
    return new Promise(resolve => {
      this.setState(newState,resolve);
    })
  }
  logout = async (e) => {
    await this.setStateAsync({
      accessToken: "",
      refreshToken: "",
      tokenTime: ""
    });
    window.location.pathname= "/";
    console.log(this.state);
  }
  render() {
    if (!this.state.accessToken) {
      return (
        <div className = "loginPageDiv">
          <img className = "loginPageLogo" src = {SpotifyLogo} alt = ""></img>
          <h1 className = "frontPageWelcomeText">Welcome to Mixify!</h1>
          <form action ="https://mixify-backend.herokuapp.com/login">
            <button className = "searchButton frontPageLoginButton" >Login Using Spotify</button>
          </form>
        </div>
      )
    }
    else {
      return (
        <React.Fragment>
          <UserPage 
            logout = {this.logout} 
            accessToken = {this.state.accessToken} 
            refreshToken = {this.state.refreshToken}
            tokenTime = {this.state.tokenTime}
            handleRefresh = {this.handleRefresh}
          />
        </React.Fragment>
      )
    }
  }
}

export default App;
