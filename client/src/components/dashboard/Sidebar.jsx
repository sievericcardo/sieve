import React, { useState } from 'react';

import {
  Drawer,
  List,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Link,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import {
  Menu as MenuIcon,
  Architecture as ArchitectureIcon
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles'; 

import {
  mainListItems,
  secondaryListItems,
  mainListItemsMobile,
  secondaryListItemsMobile
} from './listItems';

import logo from "../../assets/img/base-img/sieve-logo-dark.webp";

const drawerWidth = 250;

const PREFIX = 'Sidebar';
const classes = {
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerPaperClose: `${PREFIX}-drawerPaperClose`,
  sideBar: `${PREFIX}-sideBar`,
};

const Root = styled(Drawer)(({ theme }) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    paddingLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: '85px',
    width: 'calc(100% - 20px)',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '85px',
    width: `calc(100% - 15px)`,
  }
}));


const Sidebar = () => {
  const [open] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className='navLogo' alt="Logo" />
          <Typography variant="h4" className='navRoot'>
            <Link className='navLinkStyle' href="/">
              <span className='navTitle'>Sieve</span>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Root className={ classes.sideBar }
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            maxWidth: drawerWidth,
            boxSizing: 'border-box',
            paddingLeft: '10px',
          },
        }}
        variant="permanent"
        anchor="left"
        open={ open }
        style={{ maxWidth: drawerWidth }}
      >
        <div style={{ padding: '15px' }}>
          <ArchitectureIcon className='navIcon' fontSize="large" />
        </div>
        {!isMobile ? (
          <>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </>
        ) : (
          <>
            <Divider />
            <List>{ mainListItemsMobile }</List>
            <Divider />
            <List>{ secondaryListItemsMobile }</List>
          </>
        )}
      </Root>
    </>
  )
}

export default Sidebar;
