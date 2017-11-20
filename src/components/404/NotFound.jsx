import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export class NotFound extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <div>Not Found</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default NotFound
