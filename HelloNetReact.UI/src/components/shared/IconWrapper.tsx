import React from 'react'
import classnames from 'classnames'
import {capitalize} from 'lodash'
import {AccountCircle, BarChart, Dashboard, Layers, LockOutlined, Menu, ShoppingCart, People} from '@material-ui/icons'

import {SvgIconProps} from '@material-ui/core/SvgIcon'

import {IconType} from './IconTypes'
import {ObjectType} from 'types/object'

import useStyles from './IconWrapperStyles'

const icons = {
  AccountCircle,
  BarChart,
  Dashboard,
  Layers,
  LockOutlined,
  Menu,
  ShoppingCart,
  People
}

type Props = {
  type: IconType
  margin?: 'sm'
} & SvgIconProps

const IconWrapper = ({className, type, margin, ...rest}: Props) => {
  const styles = useStyles() as ObjectType
  const iconClass = classnames(className, {
    [styles[`margin${capitalize(margin)}`]]: margin
  })
  const Icon = icons[type]

  return <Icon {...rest} className={iconClass} />
}

export default IconWrapper
