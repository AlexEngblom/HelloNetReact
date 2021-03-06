import React, {Fragment} from 'react'

import { Drawer, Divider, Hidden, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import IconWrapper from 'components/shared/IconWrapper'

import useStyles from './SideBarStyles'

type Props = {
  mobileOpen: boolean
  toggleMobileSidebar: () => void
}

const SideBar = ({mobileOpen, toggleMobileSidebar}: Props) => {
  const classes = useStyles()

  function renderList() {
    return (
      <Fragment>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <IconWrapper type="Dashboard" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconWrapper type="ShoppingCart" />
            </ListItemIcon>
            <ListItemText primary="Derpers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconWrapper type="People" />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconWrapper type="BarChart" />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconWrapper type="Layers" />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
        </List>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          variant="temporary"
          anchor="left"
          classes={{paper: classes.drawerPaper}}
          open={mobileOpen}
          onClose={toggleMobileSidebar}
          ModalProps={{keepMounted: true}}
        >
          {renderList()}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer open classes={{paper: classes.drawerPaper}} variant="permanent">
          {renderList()}
        </Drawer>
      </Hidden>
    </Fragment>
  )
}

export default SideBar
