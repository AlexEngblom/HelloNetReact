import React from 'react'
import classnames from 'classnames'
import {Container} from '@material-ui/core'
import {ContainerProps} from '@material-ui/core/Container'

import useStyles from './ContainerWrapperStyles'

type Props = {
  maxWidth?: string
  navbar?: boolean
  padded?: boolean
  component?: any
} & ContainerProps

const ContainerWrapper = ({children, navbar, padded = true, maxWidth = 'xl', component = 'main', ...rest}: Props) => {
  const {horPadding, navbarMargin} = useStyles()
  const className = classnames({
    [horPadding]: padded,
    [navbarMargin]: navbar
  })

  return (
    <Container {...rest} className={className} component={component} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default ContainerWrapper
