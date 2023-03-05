import React, { Component } from 'react'

export default class ClickCountertwo extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
        <button onClick={incrementCount}> Clicked {count} times</button>
    )
  }
}
