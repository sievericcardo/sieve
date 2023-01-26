import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Light colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#c6c6c6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f6f6f6',
    },
  },
  typography: {
    body1: {
      color: '#000!important'
    },
    body2: {
      color: '#000!important'
      // fontWeight: 500,
      // fontSize: 26,
      // letterSpacing: 0.5,
    },
    h4: {
      color: '#000!important'
    },
    h6: {
      color: '#fff!important'
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

export default theme;
