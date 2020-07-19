import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import PropTypes from 'prop-types'

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        currentUser ? <Component {...matchProps} /> : <Redirect to="/sign-in" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string
}

export default PrivateRoute
