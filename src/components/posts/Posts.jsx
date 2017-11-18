import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Posts extends Component {
  render() {
    return (
      <div>Posts</div>
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
)(Posts)
