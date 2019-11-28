import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
export default class SearchSection extends Component {
  state = {
    name: "",
    firstThreeSearched: []
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSearch = () => {
    if (this.state.name.length > 0) 
    {
      fetch(`http://localhost:5000/search/${this.props.token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "message": this.state.name
        })
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          ...this.state,
          firstThreeSearched: data.tracks.items.slice(0,3)
        })
      });
    }
  }
  render() {
    return (
      <div>
        <SearchBar handleChange = {this.handleChange} handleSearch = {this.handleSearch} />
        {this.state.firstThreeSearched.length > 1 ? <SearchResults results = {this.state.firstThreeSearched}/> : null}
      </div>
    )
  }
}
