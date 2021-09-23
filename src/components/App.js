import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import NavBar from "./nav"
import Sign from "./sign"
import Home from './home'
import Newquestion from './newquestion'
import Leaderboard from './leaderboard'
import Viewpoll from './viewpoll'
import Results from './results'
import PageNotFound from './404'

import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'

import PrivateRoute from '../utils/PrivateRoute'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
    this.props.dispatch(getQuestions())
  }
  render(){
    return(
      <div>
        {this.props.loadingUsers === true && this.props.loadingQuestions === true
          ? null
          : <BrowserRouter>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Sign}/>
                <PrivateRoute exact path="/questions" component={Home}/>
                <PrivateRoute exact path="/add" component={Newquestion}/>
                <PrivateRoute exact path="/leaderboard" component={Leaderboard}/>
                <PrivateRoute exact path={`/questions/${this.props.id}`} component={Viewpoll}/>
                <PrivateRoute exact path="/results" component={Results}/>
                <Route path="*" component={PageNotFound}/>
              </Switch>
            </BrowserRouter>
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, users, storeId }){
  return{
    loadingUsers: users === null,
    loadingQuestions: questions === null,
    id: storeId ? storeId : ''
  }
}

export default connect(mapStateToProps)(App)
