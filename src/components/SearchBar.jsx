import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className = "searchBarDiv">
        <input onChange = {this.props.handleChange} placeholder = "Search for music here" className = "searchBar"></input>
        <button onClick = {this.props.handleSearch} className = "searchButton" >Search </button>
      </div>
    )
  }
}
