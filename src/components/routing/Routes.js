import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import ProtectedRoute from './ProtectedRoute'
import { TopMenu } from '../topMenu/TopMenu'
import Login from '../login/Login'
import Dashboard from '../dashboard/Dashboard'
import Posts from '../posts/Posts'
import Albums from '../albums/Albums'
import ToDos from '../toDos/ToDos'
import NotFound from '../404/NotFound'


export class Routes extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <TopMenu loggedInUser={this.props.loggedInUser} logOut={this.props.logOut} />
          <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/posts" component={Posts} />
              <ProtectedRoute exact path="/albums" component={Albums} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {
        logOut: () => dispatch(actions.setLoggedInUser(null))
      }
    },
)(Routes)
