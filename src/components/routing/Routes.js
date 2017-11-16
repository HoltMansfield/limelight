import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './ProtectedRoute'
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
          <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
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
)(Routes)
