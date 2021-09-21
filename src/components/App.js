import React, { Component } from 'react'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import Sign from "./sign"
import { getQuestions } from '../actions/questions'
import { loggedInUser, setLoggedUser } from '../actions/loggedInUser'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
    this.props.dispatch(getQuestions())
    this.props.dispatch(setLoggedUser(loggedInUser))
  }
  render(){
    return(
      <div>
        {this.props.loading === true && this.props.loading1
          ? null
          : <Sign /> 
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, users }){
  return{
    loading: questions === null,
    loading1: users === null

  }
}

export default connect(mapStateToProps)(App)
