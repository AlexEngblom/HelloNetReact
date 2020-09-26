import React from 'react'
import ContainerWrapper from 'components/shared/ContainerWrapper'
import {Route, Switch, Redirect} from 'react-router-dom'

import SignInPage from 'components/pages/SignIn/SignInPage'
import routes from 'routing/routes'

const UnsignedLayout = () => {
  return (
    <ContainerWrapper maxWidth="xs">
      <Switch>
        <Route exact path={routes.unsigned.signin} component={SignInPage} />
        <Redirect to={routes.unsigned.signin} />
      </Switch>
    </ContainerWrapper>
  )
}

export default UnsignedLayout
