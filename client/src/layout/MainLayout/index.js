import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import sieve-anime-background from '../../assets/img/base-img/sieve-anime-background.webp';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
} from '@mui/material';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/navbar/Footer';
import { SET_MENU } from '../../store/actions';

const MainLayout = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: SET_MENU});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: 'block' }}>
      <CssBaseline />
      <main theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </Box>
  );
};

export default MainLayout;

