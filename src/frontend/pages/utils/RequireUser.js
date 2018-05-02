// @flow
import * as React from 'react'
import { compose } from 'recompose'
import { Route, Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux'
import type { State } from 'frontend/store'
import Loading from 'frontend/components/Loading'

type Props = {
  component: React.ComponentType<*>,
  location: { pathname: string },
  initialAuthFinished: boolean,
  userIsLoggedIn: boolean
}

const RequireUser = (outerProps: Props) => {
  const {
    component: Component,
    initialAuthFinished,
    userIsLoggedIn,
    ...rest
  } = outerProps

  return (
    <Route
      {...rest}
      render={props => {
        if (!initialAuthFinished) {
          return <Loading />
        }

        if (initialAuthFinished && !userIsLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location.pathname
                }
              }}
            />
          )
        }

        return <Component {...props} />
      }}
    />
  )
}

const mapStateToProps = (state: State) => ({
  initialAuthFinished: state.ui.initialAuthFinished,
  userIsLoggedIn: state.ui.userIsLoggedIn
})

export default compose(connect(mapStateToProps, {}), withRouter)(RequireUser)
