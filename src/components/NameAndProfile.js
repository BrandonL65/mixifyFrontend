import React, { Component } from 'react'

export default class NameAndProfile extends Component {
  render() {
    return (
      <div className = "nameAndProfileDiv" >
          <img className = "profilePic"  src = {this.props.profilePic} alt = ""></img>
          <h2 className = "sayHello" >Hello, {this.props.name}</h2>
          <button className = "signoutBtn searchButton" onClick = {this.props.logout}>Sign Out</button>
      </div>
    )
  }
}
