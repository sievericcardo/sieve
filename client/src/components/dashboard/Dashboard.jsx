import React from 'react';
import { styled } from '@mui/material/styles';

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
    display: 'block',
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
  return (
    <Root className={ classes.root }>

    </Root>
  )
}

export default Dashboard;
