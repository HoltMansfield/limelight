import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Dashboard extends Component {
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
