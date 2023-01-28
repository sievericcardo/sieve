import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
} from '@mui/material';

import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/navbar/Footer';
import Customization from '../Customization';
import { drawerWidth } from '../../store/constants';

const Root = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: '260px',
      width: `calc(100% - ${drawerWidth}px - 30px)`
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: '85vw',
      padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      width: `76vw`,
      padding: '16px',
      marginRight: '30px',
      marginLeft: '85px'
    }
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px'
    }
  })
}));

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'block' }}>
      <CssBaseline />
      <Sidebar />
      <Root theme={theme}>
        <Outlet />
      </Root>
      <Footer />
      <Customization />
    </Box>
  );
};

export default DashboardLayout;
