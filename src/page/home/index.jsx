/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class Home extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}
export default Home