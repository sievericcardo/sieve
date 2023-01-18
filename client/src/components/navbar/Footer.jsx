import React from 'react';

import { Box, Typography, Link } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const PREFIX = 'Footer';
const classes = {
  mainContent: `${PREFIX}-mainContent`,
  whiteText: `${PREFIX}-whiteText`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.mainContent}`]: {
    textAlign: 'center',
    marginTop: '1.1em',
    paddingBottom: '1.3em',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${classes.whiteText}`]: {
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}));

const Copyright = () => {
  return (
    <Typography variant="h6" color="primary" align="center" >
      <span style={{ fontSize: "1.2em!important" }}>
        {'Copyright @'}
        <Link color="inherit" href="/">Sieve</Link>{' '}
        { new Date().getFullYear() }
        {'.'}
      </span>
    </Typography>
  )
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Root className={ classes.mainContent }>
      {/* <img src="https://tryhackme-badges.s3.amazonaws.com/Xelinion.png" alt="TryHackMe" /> */}
      <div id='footer'>
        <Box pt={4}>
          <Copyright className={ classes.whiteText } />
        </Box>
      </div>
    </Root>
  );
}

export default Footer;
