import React, { Component } from 'react'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import Newquestion from "./newquestion"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
  }
  render(){
    return(
      <div>
        {this.props.loading === true 
          ? null
          : <Newquestion /> 
        }
      </div>
    )
  }
}

function mapStateToProps({ users }){
  return{
    loading: users === null
  }
}

export default connect(mapStateToProps)(App)
