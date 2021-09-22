import React, { Component } from 'react'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import NavBar from "./nav"
import Sign from "./sign"
import Home from './home'
import Newquestion from './newquestion'
import Leaderboard from './leaderboard'
import PageNotFound from './404'
import { getQuestions } from '../actions/questions'
import { Route, Fragment, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
    this.props.dispatch(getQuestions())
    //this.props.dispatch(setLoggedUser(loggedInUser))
  }
  render(){
    console.log(this.props.setLoggedUser)
    return(
      <BrowserRouter>
        {this.props.setLoggedUser 
          
          ? <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/newQuestion" component={Newquestion}/>
                <Route exact path="/leaderboard" component={Leaderboard}/>
                <Route path="/404" component={PageNotFound}/>
              </Switch>
            </div>
          : <Sign />
        }
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ questions, users, setLoggedUser }){
  return{
    /*loading: questions === null,
    loading1: users === null,*/
    loading: setLoggedUser === null,
    setLoggedUser
  }
}

export default connect(mapStateToProps)(App)
