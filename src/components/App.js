import React, { Component } from 'react'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import Sign from "./sign"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
  }
  render(){
    return(
      <div>
        <Sign />
      </div>
    )
  }
}

export default connect()(App)
