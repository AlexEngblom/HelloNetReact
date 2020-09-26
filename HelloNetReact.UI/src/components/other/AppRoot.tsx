import React from 'react'
import {Router, Redirect, Switch} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'

import {CssBaseline} from '@material-ui/core'
import Route from 'components/other/Route'
import DashboardLayout from 'components/layout/Dashboard/DashboardLayout'
import UnsignedLayout from 'components/layout/Unsigned/UnsignedLayout'
import history from 'routing/routerHistory'
import routes from 'routing/routes'
import {useDispatch} from 'store/Store'
import * as userActions from 'store/user/UserActions'
import * as userStorage from 'utils/userStorage/UserStorage'
import theme from 'utils/theme'

import useStyles from './AppRootStyles'

const signedPaths = Object.values(routes.signed)
const unsignedPaths = Object.values(routes.unsigned)

const AppRoot = () => {
  // Inject @global styles
  useStyles()

  // Simulate fetching of user data from localStorage
  const dispatch = useDispatch()
  const user = userStorage.get()
  if (user) {
    dispatch(userActions.set(user))
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route requiresAuth path={signedPaths} component={DashboardLayout} />
          <Route inaccessibleWithToken path={unsignedPaths} component={UnsignedLayout} />
          <Redirect to={routes.signed.dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default AppRoot
