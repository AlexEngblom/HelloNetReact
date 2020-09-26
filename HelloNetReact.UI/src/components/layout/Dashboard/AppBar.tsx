import React, {useState, useRef} from 'react'

import {
  AppBar as MuiAppBar,
  Button,
  Hidden,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core'
import IconWrapper from 'components/shared/IconWrapper'
import ContainerWrapper from 'components/shared/ContainerWrapper'
import * as userActions from 'store/user/UserActions'
import {useDispatch} from 'store/Store'

import useStyles from './AppBarStyles'

type Props = {
  toggleMobileSidebar: () => void
}

const AppBar = ({toggleMobileSidebar}: Props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const menuAnchorRef = useRef(null)

  function openMenu() {
    setOpen(true)
  }

  function closeMenu() {
    setOpen(false)
  }

  function onLogout() {
    closeMenu()
    dispatch(userActions.remove())
  }

  return (
    <MuiAppBar className={classes.wrapper} position="absolute">
      <ContainerWrapper padded={false} component="div">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <Hidden lgUp>
              <IconButton color="inherit" onClick={toggleMobileSidebar}>
                <IconWrapper type="Menu" />
              </IconButton>
            </Hidden>
            <Typography component="h1" variant="h6">
              Dashboard
            </Typography>
          </div>
          <Button ref={menuAnchorRef} color="inherit" onClick={openMenu}>
            John Smith
            <IconWrapper type="AccountCircle" margin="sm" />
          </Button>
        </Toolbar>
        <Menu keepMounted open={!!open} anchorEl={menuAnchorRef.current} onClose={closeMenu}>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </ContainerWrapper>
    </MuiAppBar>
  )
}

export default AppBar
