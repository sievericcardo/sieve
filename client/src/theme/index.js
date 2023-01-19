import { createTheme } from '@mui/material/styles';

// assets
import colors from '../assets/scss/_themes-vars.module.scss';

// project imports
import overrides from './overrides';
import themePalette from './palette';
import themeTypography from './typography';

export const theme = (customization) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkBackground: color.commonBlack,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '3px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      },
      body: {
        width: '100vw',
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  themes.components = overrides(themeOption);

  return themes;
};

export default theme;
