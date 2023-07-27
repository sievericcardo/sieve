import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import sieveAnimeBackground from '../../assets/img/base-img/sieve-anime-background.webp';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
} from '@mui/material';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/navbar/Footer';
import AnimeCustomization from '../AnimeCustomization';
import { SET_MENU } from '../../store/actions';

const AnimeLayout = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: SET_MENU});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: 'block' }} className="animeLayout">
      <CssBaseline />
      <main theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
        <AnimeCustomization />
      </main>
    </Box>
  );
};

export default AnimeLayout;

