import React from 'react'
import { CircularProgress } from '@material-ui/core'
import useStyles from './LoaderStyles'

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper} data-testid="loader">
      <CircularProgress />
    </div>
  )
}

export default Loader
