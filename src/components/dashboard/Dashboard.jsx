import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default class Dashboard extends Component {
  componentDidMount() {
    //DEV
    //this.props.history.push('/posts')
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <div>This is the Dashboard view</div>
            <div>Please enjoy Albums and Posts.</div>
            <div>ToDos were not completed.</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
