import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../Auth'
import PropTypes from 'prop-types'

const PrivateRouteWithLayout = (props) => {
  const { component: Component, layout: Layout, ...rest } = props
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        currentUser ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  )
}

PrivateRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
}

export default PrivateRouteWithLayout
