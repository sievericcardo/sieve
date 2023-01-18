import logo from '../../assets/img/base-img/sieve-logo-dark.webp';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import clsx from 'clsx';

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Drawer,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Import element from the icons
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const PREFIX = 'Dashboard';
const classes = {
  root: `${PREFIX}-root`,
  toolbar: `${PREFIX}-toolbar`,
  toolbarIcon: `${PREFIX}-toolbarIcon`,
  appBar: `${PREFIX}-appBar`,
  menuButton: `${PREFIX}-menuButton`,
  menuButtonHidden: `${PREFIX}-menuButtonHidden`,
  title: `${PREFIX}-title`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerPaperClose: `${PREFIX}-drawerPaperClose`,
  appBarSpacer: `${PREFIX}-appBarSpacer`,
  content: `${PREFIX}-content`,
  container: `${PREFIX}-container`,
  paper: `${PREFIX}-paper`,
  fixedHeight: `${PREFIX}-fixedHeight`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`&.${classes.toolbar}`]: {
    paddingRight: 24,
  },
  [`&.${classes.toolbarIcon}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  [`&.${classes.appBar}`]: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  [`&.${classes.menuButton}`]: {
    marginRight: 36,
  },
  [`&.${classes.menuButtonHidden}`]: {
    display: 'none',
  },
  [`&.${classes.title}`]: {
    flexGrow: 1,
  },
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
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  [`&.${classes.appBarSpacer}`]: theme.mixins.toolbar,
  [`&.${classes.content}`]: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  [`&.${classes.container}`]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  [`&.${classes.paper}`]: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  [`&.${classes.fixedHeight}`]: {
    height: 240,
  },
}));

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  if (auth === null) {
    return <Navigate to="/" />;
  }

  return (
    <Root className={ classes.root }>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={ clsx(classes.appBar, open && classes.appBarShift) }
      >
        <Toolbar className={ classes.toolbar }>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={ handleDrawerOpen }
            className={ clsx(classes.menuButton, open && classes.menuButtonHidden) }
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className={ classes.logo } alt="Logo dashboard" />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={ classes.pageTitle }
          >
            <span className={ classes.title }>Sieve Dashboard</span>
            <IconButton color="inherit" className={ classes.notification }>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Root>
  )
}

export default Dashboard;
