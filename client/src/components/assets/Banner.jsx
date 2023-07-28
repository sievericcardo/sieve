import React from 'react';

import { styled } from '@mui/material/styles';

const PREFIX = 'Banner';
const classes = {
  bannerContainer: `${PREFIX}-bannerContainer`,
  banner: `${PREFIX}-banner`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.bannerContainer}`]: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    padding: 0,
    margin: 0,
    left: 0,
    top: 0,
    zIndex: 1,
  },
  [`&.${classes.banner}`]: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
}));

const Banner = (childData) => {
  return (
    <Root className={ classes.bannerContainer }>
      <img src={ childData.childToParent[0] } className={ classes.banner } alt={ childData.childToParent[1] } style={{ width: "100%"}}/>
    </Root>
  );
};

export default Banner;
