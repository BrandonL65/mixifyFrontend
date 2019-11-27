import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    name: ""
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSearch = () => {
    
  }
  render() {
    return (
      <div>
        <input onChange = {this.handleChange} placeholder = "Search for music here"></input>
        <button onClick = {this.handleSearch}>Search</button>
      </div>
    )
  }
}
