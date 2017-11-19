import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Dashboard extends Component {
  componentDidMount() {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div>Dashboard view</div>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {

      }
    },
)(Dashboard)
