import React from 'react';

import { styled } from '@mui/material/styles';

const PREFIX = 'Projects';
const classes = {
  flexContainer: `${PREFIX}-flexContainer`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.flexContainer}`]: {
    display: 'flex',
    height: '600px',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  }
}));

const Projects = () => {

  return (
    <Root className={ classes.flexContainer }></Root>
  );
}

export default Projects;
