import React, { Component } from 'react'
import { Row, Col, Glyphicon, ButtonGroup, Button } from 'react-bootstrap'


export class Sort extends Component {
  getButtonState(isAscending) {
    if((isAscending && this.props.isSortAscending) || (!isAscending && !this.props.isSortAscending)) {
      return 'primary'
    }

    return 'default'
  }

  render() {
    return (
      <Row className="show-grid margin-bottom-10">
        <Col>
          <div className="pull-right">
            <ButtonGroup>
              <Button bsStyle={this.getButtonState(true)} onClick={() => this.props.updateSort(true)}><Glyphicon glyph="chevron-up" /></Button>
              <Button bsStyle={this.getButtonState(false)} onClick={() => this.props.updateSort(false)}><Glyphicon glyph="chevron-down" /></Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Sort
