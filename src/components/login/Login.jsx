import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import * as actions from '../../actions'


export class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  findUser(users, loginAttempt) {
    return users.find(user => {
      return user.email === loginAttempt.username
    })
  }

  login() {
    const { setLoggedInUser, getUsers, history } = this.props
    const loginAttempt = {
      username: ReactDOM.findDOMNode(this.refs.username).value
    }

    return getUsers()
      .then(users => {
        let matchedUser = this.findUser(users, loginAttempt)
        if(matchedUser) {
          notify.show(`Logged in as ${matchedUser.email}`, 'success', 1500)
          setLoggedInUser(matchedUser)
          history.push('/dashboard')
        }
      })
      .catch(() => { })
  }

  // DEV
  // componentDidMount() {
  //   this.login()
  // }

  render() {
    return (
      <div>
        <div><input type="text" placeholder="Username" ref="username" defaultValue={this.props.debugUserName} /></div>
        <div><button onClick={this.login}>Login</button></div>
      </div>
    )
  }
}

// DEV
Login.defaultProps = {
  debugUserName: 'Sincere@april.biz'
}

export default connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {
        getUsers: () => dispatch(actions.httpGet('users')),
        setLoggedInUser: user => dispatch(actions.setLoggedInUser(user))
      }
    },
)(Login)
