import React, { useState } from 'react';

import {
  Drawer,
  List,
  Divider,
  IconButton,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles'; 

import { mainListItems, secondaryListItems } from './listItems';

import clsx from 'clsx';

const drawerWidth = 240;

const PREFIX = 'Sidebar';
const classes = {
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerPaperClose: `${PREFIX}-drawerPaperClose`,
  sideBar: `${PREFIX}-sideBar`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.drawerPaper}`]: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  [`&.${classes.drawerPaperClose}`]: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  [`&.${classes.sideBar}`]: {
    maxWidth: '20vw',
    position: 'absolute',
    left: 0,
    height: '100vh',
    backgroundColor: '#fff'
  },
}));

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Root className={ classes.sideBar }>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={ open }
      >
        <div className={ classes.toolbarIcon }>
          <IconButton onClick={ handleDrawerClose }>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{ mainListItems}</List>
        <Divider />
        <List>{ secondaryListItems}</List>
      </Drawer>
    </Root>
  )
}

export default Sidebar;
