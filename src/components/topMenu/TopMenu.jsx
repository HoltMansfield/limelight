import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { notify } from 'react-notify-toast'


export class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logOut()
    notify.show('Logged out', 'success', 500)
  }

  renderNavBar() {
    const { loggedInUser } = this.props;

    return (
      <Navbar>
        <Navbar.Text><Link to="/posts">Posts</Link></Navbar.Text>
        <Navbar.Text><Link to="/albums">Albums</Link></Navbar.Text>
        <Navbar.Text><Link to="/toDos">ToDos</Link></Navbar.Text>
        <Nav pullRight>
          <NavItem href={ 'http://www.' +loggedInUser.website}>
            {loggedInUser.name} ({loggedInUser.company.name})
          </NavItem>
          <NavItem><span>|</span></NavItem>
          <NavItem onClick={this.logout} href="#">Logout</NavItem>
        </Nav>
      </Navbar>
    )
  }

  render() {
    if(this.props.loggedInUser) {
      return this.renderNavBar()
    }

    return null;
  }
}
