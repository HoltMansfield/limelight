import React, { Component } from 'react';
import Notifications from 'react-notify-toast'
import Routes from '../../components/routing/Routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Routes />
      </div>
    );
  }
}

export default App;
