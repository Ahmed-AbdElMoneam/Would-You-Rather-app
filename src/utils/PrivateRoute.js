import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(prop) =>{
      return(
        (localStorage.getItem("auth") === "true") ?
        (<Component {...prop} />) : 
        (
          <Redirect
            to={{
              pathname: '/',
              state: { from: prop.location },
            }}
          />
        )
      )}
    }
  />
)

export default PrivateRoute