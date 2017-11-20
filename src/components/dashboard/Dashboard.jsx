import React, { Component } from 'react'


export default class Dashboard extends Component {
  componentDidMount() {
    //DEV
    //this.props.history.push('/posts')
  }

  render() {
    return (
      <div>
        <div>This is the Dashboard view</div>
        <div>Please enjoy Albums and Posts.</div>
        <div>ToDos were not completed.</div>
      </div>
    )
  }
}
