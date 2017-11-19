import React, { Component } from 'react'

export class Search extends Component {
  handleChange(e) {
    const searchTerms = this.refs.search ? this.refs.search.value : ''
    this.props.updateSearch(searchTerms)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="search" ref="search" onChange={() => this.handleChange()} />
      </div>
    )
  }
}

export default Search
