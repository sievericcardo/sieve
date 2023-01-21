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
  Button
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon
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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className='navLogo' alt="Logo" />
          <Typography variant="h4" className='navRoot'>
            <Link className='navLinkStyle' to="/">
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
        <div className={ classes.toolbarIcon }>
          <IconButton onClick={ handleDrawerClose }>
            <ChevronLeftIcon />
          </IconButton>
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
