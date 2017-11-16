import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'


export class ProtectedRoute extends Component {
  render() {
    const {component: Component, loggedInUser, ...rest} = this.props

    return (
      <Route
        {...rest}
        render={(props) => {
          return loggedInUser != null
          ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}}
      />
    )
  }
}

export default connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {

      }
    },
)(ProtectedRoute)
