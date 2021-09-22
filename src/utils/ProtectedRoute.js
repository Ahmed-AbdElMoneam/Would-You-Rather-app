import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
        this.props.setLoggedUser==='tylermcginnis' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

function mapStateToProps({ setLoggedUser }){
    return{
        setLoggedUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute)