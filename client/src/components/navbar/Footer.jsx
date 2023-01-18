import React from 'react';

import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Footer';
const classes = {
  mainContent: `${PREFIX}-mainContent`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.mainContent}`]: {
    textAlign: 'center',
    marginTop: '1.1em',
  },
}));

const Copyright = () => {
  return (
    <Typography variant="h6" color="secondary" align="center">
      {'Copyright @'}
      <Link color="inherit" href="/">Sieve</Link>{' '}
      { new Date().getFullYear() }
      {'.'}
    </Typography>
  )
};

const Footer = () => {
  return (
    <Root className={ classes.mainContent }>
      {/* <img src="https://tryhackme-badges.s3.amazonaws.com/Xelinion.png" alt="TryHackMe" /> */}
      <div id='footer'>
        <script src="https://tryhackme.com/badge/632428"></script>
        <Box pt={4}>
          <Copyright />
        </Box>
      </div>
    </Root>
  );
}

export default Footer;
