import React, { Component } from 'react'
import { Row, Col, Glyphicon } from 'react-bootstrap'

export class Search extends Component {
  handleChange(e) {
    const searchTerms = this.refs.search ? this.refs.search.value : ''
    this.props.updateSearch(searchTerms)
  }

  render() {
    return (
      <Row className="show-grid margin-bottom-10">
        <Col>
          <div className="pull-right">
            <Glyphicon glyph="search" className="margin-right-5" />
            <input type="text"
              placeholder="search"
              ref="search"
              onChange={() => this.handleChange()}
              className="margin-right-15" />
          </div>
        </Col>
      </Row>

    )
  }
}

export default Search
