import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
export default class SearchSection extends Component {
  state = {
    name: "",
    firstThreeSearched: []
  }
  handleChange = async (e) => {
    await this.setStateAsync({
      ...this.state,
      name: e.target.value
    })
  }
  handleSearch = () => {
    if (this.state.name.length > 0) 
    {
      fetch(`https://mixify-backend.herokuapp.com/search/${this.props.token}`, {
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
          firstThreeSearched: data.tracks.items.slice(0,5)
        })
      });
    }
  }
  setStateAsync = (newState) => {
    return new Promise(resolve => {
      this.setState(newState,resolve);
    })
  }
  render() {
    return (
      <div>
        <SearchBar handleChange = {this.handleChange} handleSearch = {this.handleSearch} />
        {this.state.firstThreeSearched.length > 1 ? <SearchResults key = {this.key} results = {this.state.firstThreeSearched}/> : null}
      </div>
    )
  }
}
