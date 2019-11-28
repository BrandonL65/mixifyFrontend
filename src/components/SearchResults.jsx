import React, { Component } from 'react'
import IndividualSearchedSong from "./IndividualSearchedSong"
export default class SearchResults extends Component {

  parseAllSearchedSongs = () => {
    let parsed = this.props.results.map(singleResult => {
      return <IndividualSearchedSong song = {singleResult}/>
    })
    return parsed;
  }

  render() {
    return (
      <div className = "searchResultsDiv">
        {this.parseAllSearchedSongs()}
      </div>
    )
  }
}
